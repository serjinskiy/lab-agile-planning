// ==========================================================================
// Qbic Ads Landing Page - JavaScript
// ==========================================================================

// ==========================================================================
// Translations
// ==========================================================================

const translations = {
  ru: {
    // Navigation
    nav_tagline: "Performance Google Ads для ecommerce",
    nav_services: "Услуги",
    nav_process: "Как работаем",
    nav_cases: "Кейсы",
    nav_pricing: "Тарифы",
    nav_reporting: "Отчётность",
    nav_contacts: "Контакты",
    nav_cta: "Бесплатный аудит аккаунта",

    // Hero
    hero_badge: "Google Ads под ecommerce",
    hero_title_1: "Запускаем и ведём",
    hero_title_2: "для интернет-магазинов с упором на прибыль для вашего бизнеса",
    hero_subtitle: "Работаем с ecommerce проектами в Европе, США и Украине. Строим структуру под выручку и маржу. Настройка Google Ads с нуля, ведение, аналитика и отчётность — полный цикл.",
    hero_cta_telegram: "Связаться через Telegram",
    hero_cta_whatsapp: "Связаться через WhatsApp",
    hero_highlight_1: "Без долгих договоров — ежемесячная оплата",
    hero_highlight_2: "Прозрачная отчётность по выручке и ROAS",

    // Stats
    stats_title: "Qbic Ads в цифрах",
    stats_projects: "успешных ecommerce проектов",
    stats_budget: "управляемый рекламный бюджет",
    stats_roas: "средний ROAS по портфелю клиентов",
    stats_retention: "клиентов продлевают контракт",

    // Services
    services_title: "Что именно мы делаем в Google Ads",
    services_subtitle: "Строим структуру, которая выдерживает масштабирование и не ломается при росте бюджетов.",
    service_1_title: "Shopping и PMax",
    service_1_desc: "Структура фида, custom labels под доходность, отдельные кампании под товары с разной эффективностью. PMax не в хаосе, а под конкретную стратегию.",
    service_2_title: "Поисковые кампании Google Ads",
    service_2_desc: "Семантика по категориям и брендам, минусация, разделение по маржинальности. Покрываем горячий и тёплый спрос, режем нецелевые запросы.",
    service_3_title: "Регулярная оптимизация кампаний",
    service_3_desc: "Еженедельная оптимизация, поиск точек роста, аккуратное увеличение бюджета без убийства ROAS. Фиксируем гипотезы в отчётах.",
    service_4_title: "Аналитика и аудит",
    service_4_desc: "Аудит аккаунта и фида, настройка конверсий, базовые отчёты в Looker Studio. Отображаем, что происходит с деньгами, а не только с кликами.",

    // About
    about_title: "Кто стоит за Qbic Ads",
    about_p1: "Мы — небольшая команда перформанс-специалистов, которые работают с Google Ads для ecommerce с 2019 года.",
    about_approach: "Наш подход:",
    about_list_1: "Фокус на прибыли клиента, а не на количестве проектов",
    about_list_2: "Прозрачная отчётность и доступ к аккаунтам",
    about_list_3: "Честная коммуникация — если что-то не работает, говорим об этом",
    about_geo_title: "География работы:",
    about_geo: "Украина, страны ЕС, США",
    about_clients_title: "С кем работаем:",
    about_clients: "Интернет-магазины с оборотом от $10k/месяц",

    // Process
    process_title: "Процесс работы — от аудита до масштаба",
    process_1_title: "Диагностика бизнеса и бриф",
    process_1_desc: "Смотрим ассортимент, маржинальность, гео, конкурентов и текущие источники трафика. Определяем hero-категории и быстрые гипотезы.",
    process_2_title: "Стратегия и структура аккаунта",
    process_2_desc: "Договариваемся про цели: ROAS, объём заказов, минимальный чек. Строим схему кампаний под эти цели и согласуем её с вами.",
    process_3_title: "Настройка и запуск",
    process_3_desc: "Подготавливаем фид, создаём кампании, добавляем конверсии, настраиваем отслеживание. Запускаем тестовый период 14 дней с контролем бюджета.",
    process_4_title: "Оптимизация и масштабирование",
    process_4_desc: "Раз в неделю оптимизируем и готовим промежуточный отчёт. Раз в месяц — полный отчёт. Масштабируем работающие сегменты, режем неэффективные.",
    process_resp_title: "Что мы берём на себя, а что остаётся за вами",
    process_resp_intro: "Чтобы реклама работала стабильно, нам нужен нормальный сайт и базовый порядок с аналитикой.",
    process_resp_us: "Мы:",
    process_resp_us_desc: "рекламный аккаунт, фид, кампании, отчёты и предложения по росту",
    process_resp_you: "С вашей стороны:",
    process_resp_you_desc: "актуальные цены и наличие, адекватные сроки доставки и реакция на лиды",

    // Gallery
    gallery_title: "Как выглядят аккаунты, которые мы ведём",
    gallery_subtitle: "Реальные скриншоты из кабинетов Google Ads наших клиентов",

    // Video
    video_title: "3 минуты о том, как мы работаем",
    video_placeholder: "Видео в процессе подготовки. Пока что предлагаем созвониться в Zoom и показать всё вживую.",
    video_cta: "Записаться на созвон",

    // Timeline
    infographic_title: "Путь клиента с Qbic Ads",
    timeline_1_title: "День 1-3",
    timeline_1_desc: "Аудит и стратегия",
    timeline_2_title: "День 4-14",
    timeline_2_desc: "Настройка и запуск",
    timeline_3_title: "Неделя 3-4",
    timeline_3_desc: "Первые результаты",
    timeline_4_title: "Месяц 2-3",
    timeline_4_desc: "Оптимизация и рост",
    timeline_5_title: "Месяц 4+",
    timeline_5_desc: "Стабильное масштабирование",

    // Testimonials
    testimonials_title: "Что говорят наши клиенты",
    testimonial_1_text: "Работали с двумя агентствами до Qbic Ads — оба просто жгли бюджет. Здесь впервые увидел нормальные отчёты и реальный рост выручки. ROAS вырос с 2.3 до 5.1 за три месяца.",
    testimonial_1_name: "Андрей К.",
    testimonial_1_position: "владелец интернет-магазина одежды (Украина)",
    testimonial_2_text: "Главное отличие — они думают про мою прибыль, а не про свой процент. Честно сказали, что часть категорий лучше не рекламировать из-за низкой маржи. Сфокусировались на том, что даёт результат.",
    testimonial_2_name: "Marcin W.",
    testimonial_2_position: "ecommerce менеджер auto parts shop (Польша)",
    testimonial_3_text: "Прозрачность на уровне. Еженедельные отчёты, доступ к аккаунту, объясняют каждое решение. Не просто 'мы сделали', а 'мы сделали это, потому что...'. Рекомендую.",
    testimonial_3_name: "Олена П.",
    testimonial_3_position: "маркетинг-директор beauty ecommerce (Украина)",

    // Clients
    clients_title: "Работаем с ecommerce проектами в разных нишах",

    // Cases
    cases_title: "Примеры результатов по ecommerce",
    case_1_title: "Интернет-магазин одежды",
    case_1_country: "Украина",
    case_1_niche: "Женская одежда, средний чек $45",
    case_1_period: "4 месяца работы",
    case_1_desc: "Разделили PMax на категории по маржинальности, добавили Shopping кампании под bestsellers, настроили ремаркетинг.",
    case_2_title: "Товары для дома",
    case_2_country: "США",
    case_2_niche: "Home & Garden, средний чек $78",
    case_2_period: "3 месяца работы",
    case_2_desc: "Перестроили структуру фида с custom labels под маржу и сезонность. Запустили Search кампании под brand и category запросы.",
    case_3_title: "Магазин автотоваров",
    case_3_country: "Польша",
    case_3_niche: "Auto parts, средний чек €62",
    case_3_period: "5 месяцев работы",
    case_3_desc: "Полностью пересобрали аккаунт с нуля. Создали сегментацию по брендам авто и популярности товаров.",
    case_4_title: "Косметика и уход",
    case_4_country: "Украина + ЕС",
    case_4_niche: "Beauty & Skincare, средний чек $34",
    case_4_period: "6 месяцев работы",
    case_4_desc: "Создали зеркальную структуру под два рынка с отдельными фидами. Настроили Shopping + PMax + Search.",
    case_niche: "Ниша:",
    case_period: "Срок:",
    case_budget: "Бюджет:",
    case_results: "Результаты:",
    case_revenue: "Выручка:",
    case_revenue_eu: "Выручка ЕС:",
    case_cpa: "CPA:",
    case_orders: "Заказы:",

    // Reporting
    reporting_title: "Отчётность и аналитика",
    reporting_subtitle: "Примеры дашбордов Looker Studio, которые мы готовим для клиентов",
    reporting_1_title: "Основной дашборд по выручке и ROAS",
    reporting_2_title: "Детализация по кампаниям и категориям",
    reporting_3_title: "Воронка конверсий и attribution",

    // Pricing
    pricing_title: "Тарифы и условия работы",
    pricing_from: "от",
    pricing_month: "/месяц",
    pricing_custom: "по договорённости",
    pricing_popular: "Популярный",
    pricing_cta: "Обсудить детали",
    pricing_1_title: "Старт для небольшого магазина",
    pricing_1_desc: "Подходит, если вы только запускаете Google Ads или возвращаетесь после неудачного опыта.",
    pricing_1_budget: "Рекламный бюджет до $5,000/месяц",
    pricing_1_feature_1: "Аудит и первичная стратегия",
    pricing_1_feature_2: "1-3 кампании (PMax или Search + Shopping)",
    pricing_1_feature_3: "Еженедельная оптимизация и короткий отчёт",
    pricing_1_feature_4: "Базовая настройка конверсий и Looker Studio",
    pricing_2_title: "Рост и масштаб",
    pricing_2_desc: "Для работающих магазинов, где есть выручка, но Google Ads можно прокачать и масштабировать.",
    pricing_2_budget: "Бюджет $5,000 - $20,000/месяц",
    pricing_2_feature_1: "Полная структура аккаунта под категории и маржу",
    pricing_2_feature_2: "Несколько PMax, Shopping и Search кампаний",
    pricing_2_feature_3: "Месячный отчёт с рекомендациями по росту",
    pricing_2_feature_4: "Возможен бонус за перевыполнение плана",
    pricing_2_feature_5: "Стратегические сессии раз в месяц",
    pricing_3_title: "Custom под крупный ecommerce",
    pricing_3_desc: "Если у вас несколько гео, языков и команд, и нужен гибкий формат работы по KPI.",
    pricing_3_budget: "Бюджет от $20,000/месяц и выше",
    pricing_3_feature_1: "Стратегия под несколько рынков и валют",
    pricing_3_feature_2: "Согласование KPI по ROAS и прибыльности",
    pricing_3_feature_3: "Регулярные стратегические сессии",
    pricing_3_feature_4: "Приоритетная поддержка",
    pricing_3_feature_5: "Интеграция с CRM и системами аналитики",

    // Audit
    audit_title: "Хотите понять, потянет ли ваш магазин Google Ads на нормальном уровне?",
    audit_desc: "Оставьте заявку на бесплатный аудит. Посмотрим сайт, фид, текущую рекламу и честно скажем, есть ли потенциал роста или лучше сначала докрутить продукт.",
    audit_cta: "Получить аудит",
    audit_telegram: "Связаться в Telegram",
    audit_benefits_title: "Что вы получите по итогу аудита:",
    audit_benefit_1: "Техническая часть — конверсии, фид, базовая аналитика",
    audit_benefit_2: "Структура рекламы — что работает, что сливает бюджет",
    audit_benefit_3: "Потенциал роста — оценка по выручке и ROAS",
    audit_note: "Если поймём, что сейчас не время масштабировать рекламу — так и скажем вам.",

    // FAQ
    faq_title: "Частые вопросы про работу с нами",
    faq_1_question: "Сколько нужно времени, чтобы увидеть первые результаты?",
    faq_1_answer: "Обычно первые заказы идут уже в течение первых 3-7 дней после запуска. Адекватную статистику для выводов по ROAS и цене конверсии смотрим после 2-4 недель работы, в зависимости от бюджета и чеков.",
    faq_2_question: "Нужен ли сразу большой бюджет?",
    faq_2_answer: "Нет. Для небольших магазинов стартуем с комфортного для вас бюджета и тестируем гипотезы. При росте эффективности масштабируемся постепенно, не раздувая расходы без результатов.",
    faq_3_question: "Чем вы отличаетесь от агентств, которые так же ведут Google Ads?",
    faq_3_answer: "Мы работаем как перформанс-партнёр, а не просто подрядчик по кликам. Фокус на выручке и марже, прозрачных отчётах и адекватной коммуникации. Лучше взять 3 правильных проекта, чем 20 ради оборота.",
    faq_4_question: "Даёте ли вы гарантии результата?",
    faq_4_answer: "Гарантировать конкретные цифры — безответственно, потому что результат зависит не только от рекламы, но и от сайта, ассортимента, цен, конкурентов. Мы гарантируем профессиональную работу, прозрачность и регулярную оптимизацию.",
    faq_5_question: "Можно ли работать без договора?",
    faq_5_answer: "Да, мы работаем по ежемесячной модели. Оплата за текущий месяц, без долгих обязательств. Если не понравится — можете остановить сотрудничество в любой момент.",
    faq_6_question: "Кто будет иметь доступ к рекламному аккаунту?",
    faq_6_answer: "Аккаунт всегда остаётся вашим. Мы получаем доступ администратора для управления, но вы в любой момент можете зайти и посмотреть, что происходит. Никаких закрытых аккаунтов.",
    faq_cta_text: "Если у вас остались вопросы — проще всего обсудить их в Zoom или в мессенджере.",
    faq_cta_button: "Задать свой вопрос",

    // Blog
    blog_title: "Полезное про Google Ads и ecommerce",
    blog_1_title: "Почему PMax сливает бюджет и как это исправить",
    blog_1_excerpt: "5 главных причин неэффективности Performance Max кампаний и пошаговый план оптимизации.",
    blog_1_time: "5 минут чтения",
    blog_2_title: "Custom labels в Shopping: как разделить товары по маржинальности",
    blog_2_excerpt: "Практическое руководство по настройке custom labels для сегментации товаров в фиде.",
    blog_2_time: "7 минут чтения",
    blog_3_title: "ROAS vs Profit: какую метрику смотреть в первую очередь",
    blog_3_excerpt: "Почему высокий ROAS не всегда означает прибыльность и как правильно считать эффективность.",
    blog_3_time: "4 минуты чтения",
    blog_category_optimization: "Оптимизация",
    blog_category_analytics: "Аналитика",
    blog_cta: "Читать все статьи →",

    // Contacts
    contacts_title: "Давайте обсудим ваш ecommerce проект",
    contacts_subtitle: "Можно оставить заявку через форму, написать в мессенджер или созвониться.",
    contact_phone_title: "Телефон",
    contact_email_title: "Почта",
    contact_messengers_title: "Мессенджеры",
    contact_note: "Напишите, из какой вы ниши и в каком регионе планируете рекламироваться, чтобы мы сразу перешли к делу.",

    // Form
    form_name: "Как к вам обращаться",
    form_contact: "Мессенджер или телефон",
    form_market: "Рынок",
    form_email: "Email",
    form_company: "Компания",
    form_budget: "Бюджет на рекламу в месяц",
    form_message: "Кратко о проекте (ниша, средний чек, маржинальность)",
    form_source: "Откуда узнали о нас",
    form_privacy: "Нажимая кнопку, вы соглашаетесь на обработку ваших данных для связи по проекту. Никакого спама, только по делу.",
    form_submit: "Получить аудит рекламы",

    // Footer
    footer_tagline: "Performance Google Ads для ecommerce",
    footer_nav_title: "Навигация",
    footer_contacts_title: "Контакты",
    footer_social_title: "Мессенджеры",
    footer_rights: "Все права защищены.",
    footer_privacy: "Политика конфиденциальности",

    // Cookie
    cookie_text: "Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с нашей политикой конфиденциальности.",
    cookie_accept: "Принять"
  },

  ua: {
    // Navigation
    nav_tagline: "Performance Google Ads для ecommerce",
    nav_services: "Послуги",
    nav_process: "Як працюємо",
    nav_cases: "Кейси",
    nav_pricing: "Тарифи",
    nav_reporting: "Звітність",
    nav_contacts: "Контакти",
    nav_cta: "Безкоштовний аудит акаунта",

    // Hero
    hero_badge: "Google Ads під ecommerce",
    hero_title_1: "Запускаємо і ведемо",
    hero_title_2: "для інтернет-магазинів з акцентом на прибуток для вашого бізнесу",
    hero_subtitle: "Працюємо з ecommerce проєктами в Європі, США та Україні. Будуємо структуру під виручку і маржу. Налаштування Google Ads з нуля, ведення, аналітика і звітність — повний цикл.",
    hero_cta_telegram: "Зв'язатися через Telegram",
    hero_cta_whatsapp: "Зв'язатися через WhatsApp",
    hero_highlight_1: "Без довгих договорів — щомісячна оплата",
    hero_highlight_2: "Прозора звітність по виручці і ROAS",

    // Stats
    stats_title: "Qbic Ads у цифрах",
    stats_projects: "успішних ecommerce проєктів",
    stats_budget: "керований рекламний бюджет",
    stats_roas: "середній ROAS по портфелю клієнтів",
    stats_retention: "клієнтів продовжують контракт",

    // Services
    services_title: "Що саме ми робимо в Google Ads",
    services_subtitle: "Будуємо структуру, яка витримує масштабування і не ламається при зростанні бюджетів.",
    service_1_title: "Shopping і PMax",
    service_1_desc: "Структура фіда, custom labels під доходність, окремі кампанії під товари з різною ефективністю. PMax не в хаосі, а під конкретну стратегію.",
    service_2_title: "Пошукові кампанії Google Ads",
    service_2_desc: "Семантика по категоріях і брендах, мінусація, розділення по маржинальності. Покриваємо гарячий і теплий попит, ріжемо нецільові запити.",
    service_3_title: "Регулярна оптимізація кампаній",
    service_3_desc: "Щотижнева оптимізація, пошук точок зростання, акуратне збільшення бюджету без вбивства ROAS. Фіксуємо гіпотези у звітах.",
    service_4_title: "Аналітика і аудит",
    service_4_desc: "Аудит акаунта і фіда, налаштування конверсій, базові звіти в Looker Studio. Відображаємо, що відбувається з грошима, а не тільки з кліками.",

    // About
    about_title: "Хто стоїть за Qbic Ads",
    about_p1: "Ми — невелика команда перформанс-спеціалістів, які працюють з Google Ads для ecommerce з 2019 року.",
    about_approach: "Наш підхід:",
    about_list_1: "Фокус на прибутку клієнта, а не на кількості проєктів",
    about_list_2: "Прозора звітність і доступ до акаунтів",
    about_list_3: "Чесна комунікація — якщо щось не працює, говоримо про це",
    about_geo_title: "Географія роботи:",
    about_geo: "Україна, країни ЄС, США",
    about_clients_title: "З ким працюємо:",
    about_clients: "Інтернет-магазини з оборотом від $10k/місяць",

    // Process
    process_title: "Процес роботи — від аудиту до масштабу",
    process_1_title: "Діагностика бізнесу і бриф",
    process_1_desc: "Дивимося асортимент, маржинальність, гео, конкурентів і поточні джерела трафіку. Визначаємо hero-категорії і швидкі гіпотези.",
    process_2_title: "Стратегія і структура акаунта",
    process_2_desc: "Домовляємося про цілі: ROAS, обсяг замовлень, мінімальний чек. Будуємо схему кампаній під ці цілі і узгоджуємо її з вами.",
    process_3_title: "Налаштування і запуск",
    process_3_desc: "Готуємо фід, створюємо кампанії, додаємо конверсії, налаштовуємо відстеження. Запускаємо тестовий період 14 днів з контролем бюджету.",
    process_4_title: "Оптимізація і масштабування",
    process_4_desc: "Раз на тиждень оптимізуємо і готуємо проміжний звіт. Раз на місяць — повний звіт. Масштабуємо робочі сегменти, ріжемо неефективні.",
    process_resp_title: "Що ми беремо на себе, а що залишається за вами",
    process_resp_intro: "Щоб реклама працювала стабільно, нам потрібен нормальний сайт і базовий порядок з аналітикою.",
    process_resp_us: "Ми:",
    process_resp_us_desc: "рекламний акаунт, фід, кампанії, звіти і пропозиції по зростанню",
    process_resp_you: "З вашого боку:",
    process_resp_you_desc: "актуальні ціни і наявність, адекватні терміни доставки і реакція на ліди",

    // Gallery
    gallery_title: "Як виглядають акаунти, які ми ведемо",
    gallery_subtitle: "Реальні скріншоти з кабінетів Google Ads наших клієнтів",

    // Video
    video_title: "3 хвилини про те, як ми працюємо",
    video_placeholder: "Відео в процесі підготовки. Поки що пропонуємо зателефонувати в Zoom і показати все наживо.",
    video_cta: "Записатися на дзвінок",

    // Timeline
    infographic_title: "Шлях клієнта з Qbic Ads",
    timeline_1_title: "День 1-3",
    timeline_1_desc: "Аудит і стратегія",
    timeline_2_title: "День 4-14",
    timeline_2_desc: "Налаштування і запуск",
    timeline_3_title: "Тиждень 3-4",
    timeline_3_desc: "Перші результати",
    timeline_4_title: "Місяць 2-3",
    timeline_4_desc: "Оптимізація і зростання",
    timeline_5_title: "Місяць 4+",
    timeline_5_desc: "Стабільне масштабування",

    // Testimonials
    testimonials_title: "Що кажуть наші клієнти",
    testimonial_1_text: "Працювали з двома агентствами до Qbic Ads — обидва просто палили бюджет. Тут вперше побачив нормальні звіти і реальне зростання виручки. ROAS виріс з 2.3 до 5.1 за три місяці.",
    testimonial_1_name: "Андрій К.",
    testimonial_1_position: "власник інтернет-магазину одягу (Україна)",
    testimonial_2_text: "Головна відмінність — вони думають про мій прибуток, а не про свій відсоток. Чесно сказали, що частину категорій краще не рекламувати через низьку маржу. Сфокусувалися на тому, що дає результат.",
    testimonial_2_name: "Marcin W.",
    testimonial_2_position: "ecommerce менеджер auto parts shop (Польща)",
    testimonial_3_text: "Прозорість на рівні. Щотижневі звіти, доступ до акаунта, пояснюють кожне рішення. Не просто 'ми зробили', а 'ми зробили це, тому що...'. Рекомендую.",
    testimonial_3_name: "Олена П.",
    testimonial_3_position: "маркетинг-директор beauty ecommerce (Україна)",

    // Clients
    clients_title: "Працюємо з ecommerce проєктами в різних нішах",

    // Cases (keeping some in original for brevity, translate as needed)
    cases_title: "Приклади результатів по ecommerce",
    case_1_title: "Інтернет-магазин одягу",
    case_1_country: "Україна",
    case_niche: "Ніша:",
    case_period: "Термін:",
    case_budget: "Бюджет:",
    case_results: "Результати:",
    case_revenue: "Виручка:",
    case_cpa: "CPA:",

    // Pricing
    pricing_title: "Тарифи і умови роботи",
    pricing_from: "від",
    pricing_month: "/місяць",
    pricing_cta: "Обговорити деталі",

    // Audit
    audit_title: "Хочете зрозуміти, чи потягне ваш магазин Google Ads на нормальному рівні?",
    audit_cta: "Отримати аудит",

    // FAQ
    faq_title: "Часті питання про роботу з нами",

    // Form
    form_name: "Як до вас звертатися",
    form_contact: "Месенджер або телефон",
    form_market: "Ринок",
    form_submit: "Отримати аудит реклами",

    // Footer
    footer_rights: "Усі права захищені.",
    footer_privacy: "Політика конфіденційності",

    // Cookie
    cookie_text: "Ми використовуємо cookies для покращення роботи сайту. Продовжуючи використовувати сайт, ви погоджуєтеся з нашою політикою конфіденційності.",
    cookie_accept: "Прийняти"
  },

  en: {
    // Navigation
    nav_tagline: "Performance Google Ads for ecommerce",
    nav_services: "Services",
    nav_process: "How We Work",
    nav_cases: "Cases",
    nav_pricing: "Pricing",
    nav_reporting: "Reporting",
    nav_contacts: "Contacts",
    nav_cta: "Free Account Audit",

    // Hero
    hero_badge: "Google Ads for ecommerce",
    hero_title_1: "We launch and manage",
    hero_title_2: "for online stores with focus on profit for your business",
    hero_subtitle: "We work with ecommerce projects in Europe, USA, and Ukraine. We build structure for revenue and margin. Google Ads setup from scratch, management, analytics, and reporting — full cycle.",
    hero_cta_telegram: "Contact via Telegram",
    hero_cta_whatsapp: "Contact via WhatsApp",
    hero_highlight_1: "No long contracts — monthly payment",
    hero_highlight_2: "Transparent reporting on revenue and ROAS",

    // Stats
    stats_title: "Qbic Ads in Numbers",
    stats_projects: "successful ecommerce projects",
    stats_budget: "managed advertising budget",
    stats_roas: "average ROAS across client portfolio",
    stats_retention: "clients renew contracts",

    // Services
    services_title: "What We Do in Google Ads",
    services_subtitle: "We build structure that withstands scaling and doesn't break when budgets grow.",
    service_1_title: "Shopping & PMax",
    service_1_desc: "Feed structure, custom labels for profitability, separate campaigns for products with different performance. PMax not in chaos, but under specific strategy.",
    service_2_title: "Google Ads Search Campaigns",
    service_2_desc: "Semantics by categories and brands, negative keywords, separation by margin. We cover hot and warm demand, cut non-target queries.",
    service_3_title: "Regular Campaign Optimization",
    service_3_desc: "Weekly optimization, finding growth points, careful budget increase without killing ROAS. We record hypotheses in reports.",
    service_4_title: "Analytics & Audit",
    service_4_desc: "Account and feed audit, conversion setup, basic Looker Studio reports. We show what's happening with money, not just clicks.",

    // About
    about_title: "Who's Behind Qbic Ads",
    about_p1: "We are a small team of performance specialists working with Google Ads for ecommerce since 2019.",
    about_approach: "Our Approach:",
    about_list_1: "Focus on client profit, not number of projects",
    about_list_2: "Transparent reporting and account access",
    about_list_3: "Honest communication — if something doesn't work, we say it",
    about_geo_title: "Work Geography:",
    about_geo: "Ukraine, EU countries, USA",
    about_clients_title: "Who We Work With:",
    about_clients: "Online stores with revenue from $10k/month",

    // Process
    process_title: "Work Process — From Audit to Scale",
    process_1_title: "Business Diagnostics & Brief",
    process_1_desc: "We look at assortment, margin, geo, competitors, and current traffic sources. We identify hero categories and quick hypotheses.",
    process_2_title: "Strategy & Account Structure",
    process_2_desc: "We agree on goals: ROAS, order volume, minimum check. We build campaign scheme for these goals and agree with you.",
    process_3_title: "Setup & Launch",
    process_3_desc: "We prepare feed, create campaigns, add conversions, set up tracking. We launch 14-day test period with budget control.",
    process_4_title: "Optimization & Scaling",
    process_4_desc: "Weekly optimization and interim report. Monthly full report. We scale working segments, cut ineffective ones.",
    process_resp_title: "What We Handle vs What's On You",
    process_resp_intro: "For stable ad performance, we need a normal website and basic analytics order.",
    process_resp_us: "We:",
    process_resp_us_desc: "advertising account, feed, campaigns, reports and growth suggestions",
    process_resp_you: "Your Side:",
    process_resp_you_desc: "current prices and availability, adequate delivery times and lead response",

    // Gallery
    gallery_title: "How Accounts We Manage Look",
    gallery_subtitle: "Real screenshots from our clients' Google Ads accounts",

    // Video
    video_title: "3 Minutes About How We Work",
    video_placeholder: "Video in preparation. For now, we suggest a Zoom call to show everything live.",
    video_cta: "Schedule a Call",

    // Timeline
    infographic_title: "Client Journey with Qbic Ads",
    timeline_1_title: "Day 1-3",
    timeline_1_desc: "Audit & Strategy",
    timeline_2_title: "Day 4-14",
    timeline_2_desc: "Setup & Launch",
    timeline_3_title: "Week 3-4",
    timeline_3_desc: "First Results",
    timeline_4_title: "Month 2-3",
    timeline_4_desc: "Optimization & Growth",
    timeline_5_title: "Month 4+",
    timeline_5_desc: "Stable Scaling",

    // Testimonials
    testimonials_title: "What Our Clients Say",
    testimonial_1_text: "Worked with two agencies before Qbic Ads — both just burned budget. Here I first saw normal reports and real revenue growth. ROAS grew from 2.3 to 5.1 in three months.",
    testimonial_1_name: "Andrey K.",
    testimonial_1_position: "clothing online store owner (Ukraine)",
    testimonial_2_text: "Main difference — they think about my profit, not their percentage. Honestly said that some categories better not advertise due to low margin. Focused on what gives results.",
    testimonial_2_name: "Marcin W.",
    testimonial_2_position: "ecommerce manager auto parts shop (Poland)",
    testimonial_3_text: "Transparency on point. Weekly reports, account access, explain every decision. Not just 'we did', but 'we did this because...'. Recommend.",
    testimonial_3_name: "Olena P.",
    testimonial_3_position: "marketing director beauty ecommerce (Ukraine)",

    // Clients
    clients_title: "We Work with Ecommerce Projects in Various Niches",

    // Cases
    cases_title: "Ecommerce Results Examples",
    case_niche: "Niche:",
    case_period: "Period:",
    case_budget: "Budget:",
    case_results: "Results:",
    case_revenue: "Revenue:",
    case_cpa: "CPA:",

    // Pricing
    pricing_title: "Pricing & Work Conditions",
    pricing_from: "from",
    pricing_month: "/month",
    pricing_cta: "Discuss Details",

    // Audit
    audit_title: "Want to Understand if Your Store Can Handle Google Ads at Normal Level?",
    audit_cta: "Get Audit",

    // FAQ
    faq_title: "Frequently Asked Questions About Working with Us",

    // Form
    form_name: "Your Name",
    form_contact: "Messenger or Phone",
    form_market: "Market",
    form_submit: "Get Advertising Audit",

    // Footer
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",

    // Cookie
    cookie_text: "We use cookies to improve the site. By continuing to use the site, you agree to our privacy policy.",
    cookie_accept: "Accept"
  }
};

// ==========================================================================
// Initialize
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-out-cubic'
  });

  // Initialize all features
  initTheme();
  initLanguage();
  initNavbar();
  initMobileMenu();
  initScrollToTop();
  initCookieNotice();
  initFAQ();
  initStats();
  initContactForm();
  initSmoothScroll();
});

// ==========================================================================
// Theme Toggle (Dark/Light Mode)
// ==========================================================================

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.classList.remove('light', 'dark');
  html.classList.add(savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ==========================================================================
// Language Switcher
// ==========================================================================

function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('language') || 'ru';

  // Set initial language
  setLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      localStorage.setItem('language', lang);
    });
  });
}

function setLanguage(lang) {
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update select options
  document.querySelectorAll('[data-i18n-option]').forEach(option => {
    const key = option.getAttribute('data-i18n-option');
    if (translations[lang] && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// ==========================================================================
// Navbar Scroll Effect
// ==========================================================================

function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// Mobile Menu
// ==========================================================================

function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu when clicking on link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}

// ==========================================================================
// Scroll to Top Button
// ==========================================================================

function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// Cookie Notice
// ==========================================================================

function initCookieNotice() {
  const notice = document.getElementById('cookieNotice');
  const acceptBtn = document.getElementById('acceptCookies');

  // Check if already accepted
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      notice.classList.remove('hidden');
    }, 2000);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    notice.classList.add('hidden');
  });
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// Animated Counters
// ==========================================================================

function initStats() {
  const stats = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-count'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target % 1 === 0 ? target : target.toFixed(1);
      clearInterval(timer);
    } else {
      element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
    }
  }, 16);
}

// ==========================================================================
// Contact Form
// ==========================================================================

function initContactForm() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('formMessage');

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    try {
      const response = await fetch('handler.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      messageDiv.classList.remove('hidden', 'error', 'success');

      if (result.success) {
        messageDiv.classList.add('success');
        messageDiv.textContent = result.message || 'Спасибо! Наш специалист свяжется в течение 1 часа';
        form.reset();
      } else {
        messageDiv.classList.add('error');
        messageDiv.textContent = result.message || 'Ошибка отправки. Попробуйте позже.';
      }
    } catch (error) {
      messageDiv.classList.remove('hidden');
      messageDiv.classList.add('error');
      messageDiv.textContent = 'Ошибка сети. Попробуйте позже.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Получить аудит рекламы';

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add('hidden');
      }, 5000);
    }
  });
}

// ==========================================================================
// Smooth Scroll
// ==========================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for navbar height

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}
