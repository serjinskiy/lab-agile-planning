<?php
/**
 * Qbic Ads - Form Handler
 * Handles contact form submissions and saves to CSV
 */

// Security headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
define('CSV_FILE', 'leads.csv');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_MARKETS', ['ukraine', 'europe', 'usa', 'other']);
define('ALLOWED_BUDGETS', ['under-1k', '1k-5k', '5k-10k', '10k-20k', '20k-plus']);
define('ALLOWED_SOURCES', ['google', 'recommendation', 'social', 'advertising', 'other']);

/**
 * Sanitize input data
 */
function sanitize($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Validate email
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Validate phone/contact
 */
function validateContact($contact) {
    // Allow phone numbers and messenger handles
    return preg_match('/^[\+\d\s\-\(\)@a-zA-Z_\.]+$/', $contact);
}

/**
 * Check for spam patterns
 */
function isSpam($data) {
    $spamPatterns = [
        '/\b(viagra|cialis|casino|lottery|winner)\b/i',
        '/<script|<iframe|javascript:/i',
        '/http.*http.*http/i', // Multiple URLs
    ];

    foreach ($spamPatterns as $pattern) {
        if (preg_match($pattern, $data)) {
            return true;
        }
    }

    return false;
}

/**
 * Rate limiting - simple file-based
 */
function checkRateLimit($ip) {
    $rateFile = sys_get_temp_dir() . '/qbic_rate_' . md5($ip);
    $now = time();
    $limit = 5; // 5 submissions per hour
    $period = 3600; // 1 hour

    if (file_exists($rateFile)) {
        $data = json_decode(file_get_contents($rateFile), true);
        $data = array_filter($data, function($timestamp) use ($now, $period) {
            return ($now - $timestamp) < $period;
        });

        if (count($data) >= $limit) {
            return false;
        }

        $data[] = $now;
    } else {
        $data = [$now];
    }

    file_put_contents($rateFile, json_encode($data));
    return true;
}

/**
 * Save to CSV file
 */
function saveToCSV($data) {
    $csvExists = file_exists(CSV_FILE);

    // Open file for append
    $file = fopen(CSV_FILE, 'a');

    if (!$file) {
        return false;
    }

    // Lock file for writing
    if (!flock($file, LOCK_EX)) {
        fclose($file);
        return false;
    }

    // Write header if file is new
    if (!$csvExists || filesize(CSV_FILE) === 0) {
        fputcsv($file, [
            'Date',
            'Time',
            'Name',
            'Contact',
            'Email',
            'Company',
            'Market',
            'Budget',
            'Message',
            'Source',
            'IP',
            'User Agent'
        ]);
    }

    // Write data
    $result = fputcsv($file, [
        date('Y-m-d'),
        date('H:i:s'),
        $data['name'],
        $data['contact'],
        $data['email'],
        $data['company'],
        $data['market'],
        $data['budget'],
        $data['message'],
        $data['source'],
        $data['ip'],
        $data['user_agent']
    ]);

    // Unlock and close
    flock($file, LOCK_UN);
    fclose($file);

    return $result !== false;
}

/**
 * Send notification email (optional)
 */
function sendNotification($data) {
    // Configure your email here if needed
    $to = 'qbic.ads.digital@gmail.com';
    $subject = 'New Lead from Qbic Ads Website';

    $message = "New lead received:\n\n";
    $message .= "Name: " . $data['name'] . "\n";
    $message .= "Contact: " . $data['contact'] . "\n";
    $message .= "Email: " . $data['email'] . "\n";
    $message .= "Company: " . $data['company'] . "\n";
    $message .= "Market: " . $data['market'] . "\n";
    $message .= "Budget: " . $data['budget'] . "\n";
    $message .= "Message: " . $data['message'] . "\n";
    $message .= "Source: " . $data['source'] . "\n";
    $message .= "IP: " . $data['ip'] . "\n";
    $message .= "Date: " . date('Y-m-d H:i:s') . "\n";

    $headers = 'From: noreply@qbicads.com' . "\r\n" .
               'Reply-To: ' . $data['email'] . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Uncomment to enable email notifications
    // mail($to, $subject, $message, $headers);
}

// Main processing
try {
    // Get client IP
    $ip = $_SERVER['REMOTE_ADDR'];

    // Rate limiting
    if (!checkRateLimit($ip)) {
        http_response_code(429);
        echo json_encode([
            'success' => false,
            'message' => 'Too many requests. Please try again later.'
        ]);
        exit;
    }

    // Collect and sanitize form data
    $name = isset($_POST['name']) ? sanitize($_POST['name']) : '';
    $contact = isset($_POST['contact']) ? sanitize($_POST['contact']) : '';
    $email = isset($_POST['email']) ? sanitize($_POST['email']) : '';
    $company = isset($_POST['company']) ? sanitize($_POST['company']) : '';
    $market = isset($_POST['market']) ? sanitize($_POST['market']) : '';
    $budget = isset($_POST['budget']) ? sanitize($_POST['budget']) : '';
    $message = isset($_POST['message']) ? sanitize($_POST['message']) : '';
    $source = isset($_POST['source']) ? sanitize($_POST['source']) : '';
    $privacy = isset($_POST['privacy']) ? true : false;

    // Validation errors
    $errors = [];

    // Required fields
    if (empty($name)) {
        $errors[] = 'Name is required';
    }

    if (empty($contact)) {
        $errors[] = 'Contact is required';
    } elseif (!validateContact($contact)) {
        $errors[] = 'Invalid contact format';
    }

    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!validateEmail($email)) {
        $errors[] = 'Invalid email format';
    }

    if (empty($market)) {
        $errors[] = 'Market is required';
    } elseif (!in_array($market, ALLOWED_MARKETS)) {
        $errors[] = 'Invalid market value';
    }

    if (empty($budget)) {
        $errors[] = 'Budget is required';
    } elseif (!in_array($budget, ALLOWED_BUDGETS)) {
        $errors[] = 'Invalid budget value';
    }

    if (empty($message)) {
        $errors[] = 'Message is required';
    }

    if (!$privacy) {
        $errors[] = 'You must accept the privacy policy';
    }

    // Check for spam
    $combinedText = $name . ' ' . $email . ' ' . $message;
    if (isSpam($combinedText)) {
        $errors[] = 'Spam detected';
    }

    // If validation errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validation errors: ' . implode(', ', $errors)
        ]);
        exit;
    }

    // Prepare data for saving
    $leadData = [
        'name' => $name,
        'contact' => $contact,
        'email' => $email,
        'company' => $company,
        'market' => $market,
        'budget' => $budget,
        'message' => $message,
        'source' => $source,
        'ip' => $ip,
        'user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown'
    ];

    // Save to CSV
    if (!saveToCSV($leadData)) {
        throw new Exception('Failed to save lead data');
    }

    // Send notification (optional)
    // sendNotification($leadData);

    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Our specialist will contact you within 1 hour.'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error. Please try again later.'
    ]);

    // Log error (optional)
    error_log('Qbic Ads Form Error: ' . $e->getMessage());
}
?>
