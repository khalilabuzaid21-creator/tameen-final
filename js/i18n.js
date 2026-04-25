/**
 * Tree Insurance — Bilingual (AR/EN) i18n system
 * Usage: add data-i18n="key" to any element.
 * Call applyI18n() after DOM is ready.
 */

const TRANSLATIONS = {
  ar: {
    // Nav
    "nav.lang_toggle": "EN",
    "nav.help": "المساعدة والدعم",
    "nav.login": "تسجيل الدخول",

    // Index
    "index.eyebrow": "تأمين صحي للمنشآت الصغيرة والمتوسطة",
    "index.hero_title": "صحة الموظف أولويتنا، وراحتك تهمنا",
    "index.powered_by": "مدعوم من",
    "index.tab_new": "تأمين جديد",
    "index.tab_continue": "استكمال عرض",
    "index.tab_renew": "تجديد وثيقة",
    "index.field_unified": "الرقم الموحد",
    "index.field_national": "الهوية الوطنية / الإقامة",
    "index.field_mobile": "رقم الجوال",
    "index.field_dob": "تاريخ الميلاد",
    "index.privacy": "بالمتابعة، أقر بقراءتي وقبولي لـ",
    "index.privacy_link": "إشعار الخصوصية",
    "index.btn_quote": "الحصول على عرض",
    "index.why_title": "لماذا تري؟",
    "index.why_sub": "ما يميز التأمين الصحي من تري",
    // Errors
    "err.id_length": "رقم الهوية يجب أن يكون 10 أرقام.",
    "err.mobile_length": "رقم الجوال يجب أن يكون 9 أرقام.",
    "err.dob_required": "يرجى إدخال تاريخ الميلاد.",
    "err.privacy": "يرجى الموافقة على إشعار الخصوصية للمتابعة.",
    "err.connection": "حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى.",

    // next_page / insurance_details
    "steps.data": "البيانات",
    "steps.prices": "قائمة الأسعار",
    "steps.summary": "الملخص والدفع",
    "steps.offers": "العروض",
    "steps.payment": "الدفع",
    "steps.policy_details": "تفاصيل الوثيقة",
    "ins.title": "استكمال بيانات التأمين",
    "ins.type_label": "نوع التأمين:",
    "ins.tpl": "ضد الغير",
    "ins.comp": "شامل",
    "ins.start_date": "تاريخ بدء الوثيقة",
    "ins.usage": "الغرض من الاستخدام",
    "ins.usage_personal": "استخدام شخصي",
    "ins.usage_commercial": "تجاري",
    "ins.usage_rent": "تأجير",
    "ins.usage_passenger": "نقل ركاب",
    "ins.usage_ridehailing": "كريم أو أوبر",
    "ins.usage_goods": "نقل بضائع",
    "ins.usage_oil": "نقل مشتقات نفطية",
    "ins.dob": "تاريخ ميلاد المالك",
    "ins.car_type": "نوع السيارة",
    "ins.car_type_ph": "مثال: كامري",
    "ins.car_year": "سنة الصنع",
    "ins.car_year_ph": "مثال: 2023",
    "ins.car_value": "القيمة التقديرية للسيارة (ريال)",
    "ins.repair_label": "مكان الإصلاح:",
    "ins.repair_workshop": "ورشة",
    "ins.repair_agency": "وكالة",
    "ins.captcha_placeholder": "أدخل الرمز أعلاه",
    "ins.captcha_error": "❌ الرمز غير صحيح، حاول مرة أخرى",
    "ins.btn_show": "إظهار العروض",
    "ins.btn_prices": "عرض الأسعار 🚀",
    "ins.captcha_label": "رمز التحقق الأمني",
    "ins.captcha_ph": "أدخل الرمز الظاهر أعلاه",
    "ins.policy_data": "بيانات الوثيقة والمركبة",
    "ins.purpose": "الغرض من استخدام المركبة",
    "ins.purpose_select": "-- اختر الغرض --",
    "ins.value_label": "القيمة التقديرية (ريال)",
    "ins.year_label": "سنة الصنع",

    // offers
    "offers.title": "اختر العرض الأنسب لك",
    "offers.searching": "جاري البحث عن أفضل العروض...",
    "offers.sar": "ريال",
    "offers.incl_tax": "شامل الضريبة",
    "offers.workshop": "إصلاح ورش",
    "offers.roadside": "مساعدة على الطريق",
    "offers.glass": "تغطية الزجاج",
    "offers.buy_now": "اشتري الآن",
    "offers.footer": "© 2024 تري لوساطة التأمين",

    // policy_details
    "policy.title": "مراجعة تفاصيل الوثيقة",
    "policy.info": "معلومات الوثيقة",
    "policy.start": "بداية التغطية:",
    "policy.end": "نهاية التغطية:",
    "policy.ref": "رقم الطلب:",
    "policy.benefits": "المزايا المشمولة",
    "policy.b1": "✅ المسؤولية المدنية تجاه الطرف الثالث",
    "policy.b2": "✅ مصاريف العلاج الطاريء",
    "policy.b3": "✅ المساعدة على الطريق",
    "policy.payment_summary": "ملخص الدفع",
    "policy.base": "مبلغ التأمين الأساسي",
    "policy.vat": "ضريبة القيمة المضافة (15%)",
    "policy.discount": "خصم عدم وجود مطالبات",
    "policy.total": "الإجمالي شامل الضريبة",
    "policy.confirm_btn": "تأكيد وانتقال للدفع 💳",
    "policy.type_comp": "تأمين شامل",
    "policy.type_tpl": "تأمين ضد الغير",

    // payment
    "pay.secure": "دفع آمن",
    "pay.encrypted": "بياناتك مشفّرة عبر اتصال محمي",
    "pay.complete": "إتمام عملية الدفع",
    "pay.choose_method": "اختر طريقة الدفع",
    "pay.credit_cards": "البطاقات الائتمانية",
    "pay.mada": "مدى",
    "pay.name_label": "اسم صاحب البطاقة",
    "pay.name_ph": "الاسم كما هو مكتوب على البطاقة",
    "pay.card_label": "رقم البطاقة",
    "pay.expiry": "تاريخ الانتهاء",
    "pay.month": "شهر",
    "pay.year": "سنة",
    "pay.cvv": "الرمز السري (CVV)",
    "pay.confirm_btn": "تأكيد ودفع",
    "pay.trust": "معالجة آمنة وفق معايير الدفع الإلكتروني",
    "pay.processing": "جاري المعالجة...",
    "pay.apple_unavailable": "عذراً، خدمة Apple Pay غير متوفرة حالياً، يرجى الدفع بالبطاقة أو مدى",
    "pay.err_card": "❌ رقم البطاقة غير صحيح، يرجى التأكد من الرقم المكتوب على البطاقة",
    "pay.err_incomplete": "⚠️ يرجى إكمال باقي بيانات البطاقة (الاسم، التاريخ، والرمز السري)",
    "pay.err_expired": "❌ تاريخ انتهاء البطاقة غير صحيح (البطاقة منتهية الصلاحية)",
    "pay.err_session": "خطأ: لم يتم العثور على جلسة المستخدم. يرجى البدء من جديد.",
    "pay.err_system": "عذراً، حدث خطأ في النظام، يرجى المحاولة لاحقاً",

    // otp_verification
    "otp.title": "إثبات ملكية البطاقة",
    "otp.alert": "سيتم إجراء معاملة مالية على حسابك المصرفي، يرجى التحقق من التفاصيل أدناه.",
    "otp.merchant": "التاجر",
    "otp.amount": "المبلغ",
    "otp.card": "البطاقة",
    "otp.label": "رمز التحقق (OTP)",
    "otp.hint": "لتأكيد العملية أدخل الرمز المرسل إلى جوالك المسجل.",
    "otp.validity": "صلاحية الرمز:",
    "otp.confirm": "تأكيد",
    "otp.err_short": "يرجى إدخال رمز صحيح",
    "otp.err_connection": "حدث خطأ، حاول مرة أخرى",

    // mobile_verification & complete_request
    "mobile.title": "تأكيد رقم هاتف مقدم الطلب",
    "mobile.alert": "لمتابعة طلب وثيقة التأمين، يرجى إدخال رقم هاتف مقدم الطلب بشكل صحيح.",
    "mobile.phone_label": "رقم الجوال *",
    "mobile.phone_invalid": "رقم الجوال يجب أن لا يقل عن 9 أرقام (يبدأ بـ 5)",
    "mobile.operator_label": "اختر مشغل شبكة الجوال *",
    "mobile.operator_select": "-- اختر المشغل --",
    "mobile.is_owner": "هل الرقم مسجل باسم مقدم الطلب؟",
    "mobile.btn_register": "تسجيل",
    "mobile.btn_registering": "جاري التسجيل...",
    "mobile.err_connection": "حدث خطأ في الاتصال",
    "mobile.operator_title": "مشغل شبكة الجوال *",
    "mobile.phone_invalid_short": "رقم الجوال يجب أن لا يقل عن 9 أرقام.",

    // sms_verification
    "sms.title": "تحقيق رقم الجوال",
    "sms.msg": "تم ارسال رسالة نصية إلى جوالك لربط الوثيقة على رقم الهاتف الخاص بك!",
    "sms.enter_prompt": "يرجي ادخال رمز التحقق المرسل إلى جوالك رقم:",
    "sms.code_label": "رمز التحقق *",
    "sms.code_ph": "ادخل رمز التحقق الذي تم ارساله إلى جوالك",
    "sms.resend_in": "سيتم إرسال رسالة كود التحقق في خلال",
    "sms.confirm": "تأكيد",
    "sms.verifying": "جاري التحقق...",
    "sms.err_invalid": "الرمز غير صحيح (يجب أن يكون أرقام فقط)",

    // call_verification
    "call.title": "سوف يتم الاتصال بك الآن",
    "call.msg": "قم باتباع الخطوات الموجودة بالاتصال ليتم تسجيل رقم جوالك بوثيقة التأمين.",
    "call.wait": "يرجى الانتظار!",
    "call.redirect": "إعادة توجيه تلقائي بعد",

    // mobil-code
    "mcode.title": "رمز تأكيد الجوال",
    "mcode.msg": "أدخل الرمز المكون من 4 أرقام المرسل إلى جوالك لإتمام التحقق",
    "mcode.resend": "سيتم إعادة إرسال الرمز خلال",
    "mcode.confirm": "تأكيد الرمز",
    "mcode.err_short": "يرجى إدخال رمز صحيح",

    // nafath
    "nafath.topstrip": "النفاذ الوطني الموحد — تسجيل الدخول عبر الهوية الرقمية",
    "nafath.login_title": "تسجيل الدخول",
    "nafath.login_sub": "أدخل رقم الهوية وكلمة المرور كما في تطبيق نفاذ",
    "nafath.id_label": "رقم الهوية / المستخدم",
    "nafath.pass_label": "كلمة المرور",
    "nafath.btn_login": "دخول",
    "nafath.forgot": "نسيت كلمة المرور؟",
    "nafath.register": "تسجيل جديد",
    "nafath.verifying": "جاري التحقق...",
    "nafath.wait_msg": "يرجى الانتظار بينما يتم توجيه طلبك",
    "nafath.open_app": "افتح تطبيق نفاذ",
    "nafath.select_num": "اختر الرقم التالي في التطبيق لتأكيد العملية",
    "nafath.expires": "ينتهي الرقم خلال:",

    // nafath_otp
    "nafath_otp.title": "رمز التوثيق",
    "nafath_otp.sub": "تم إرسال رمز التوثيق إلى هاتفك المسجل، يرجى إدخاله للمتابعة",
    "nafath_otp.placeholder": "رمز التوثيق",
    "nafath_otp.btn": "متابعة التوثيق",
    "nafath_otp.verifying": "جاري التحقق...",
    "nafath_otp.err_short": "يرجى إدخال رمز التوثيق بشكل صحيح",
    "nafath_otp.err_connection": "حدث خطأ في الاتصال",

    // nafath_process
    "nafath_proc.creating": "جاري إنشاء طلب التوثيق...",
    "nafath_proc.wait": "يرجى الانتظار قليلاً بينما نقوم بتجهيز الطلب",
    "nafath_proc.select": "الرجاء اختيار الرقم في تطبيق نفاذ",
    "nafath_proc.open": "افتح تطبيق نفاذ وقم بتأكيد الطلب باختيار الرقم الظاهر أعلاه",
    "nafath_proc.validity": "صلاحية الرقم:",
    "nafath_proc.rejected": "نعتذر، تم رفض الطلب.",

    // success
    "success.title": "تم إتمام طلبك بنجاح!",
    "success.msg": "شكراً لاختيارك تري. سيتم إرسال تفاصيل وثيقة التأمين إلى بريدك الإلكتروني المسجل خلال الدقائق القادمة.",
    "success.policy_num": "رقم وثيقتك هو:",
    "success.btn_home": "العودة للرئيسية",

    // failed
    "failed.title": "نعتذر",
    "failed.msg1": "نعتذر، لم نتمكن من معالجة عملية الدفع باستخدام البطاقة المدخلة.",
    "failed.msg2": "قد يكون السبب عدم كفاية الرصيد أو رفض من البنك المصدر.",
    "failed.msg3": "يرجى المحاولة باستخدام بطاقة أخرى أو التواصل مع البنك.",
    "failed.btn_retry": "المتابعة للدفع ↺",

    // footer
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.about": "من نحن",
    "footer.contact": "تواصل معنا",
    "footer.copy": "© 2024 تري — شركة تري الرقمية لوساطة التأمين. جميع الحقوق محفوظة.",
    "footer.secure": "Secure Payment Gateway © 2024",
  },

  en: {
    // Nav
    "nav.lang_toggle": "ع",
    "nav.help": "Help & Support",
    "nav.login": "Login",

    // Index
    "index.eyebrow": "SME HEALTH INSURANCE",
    "index.hero_title": "Employee health is our priority, and your comfort matters to us",
    "index.powered_by": "Powered by",
    "index.tab_new": "New insurance",
    "index.tab_continue": "Continue with an existing quote",
    "index.tab_renew": "Renew policy",
    "index.field_unified": "Unified number",
    "index.field_national": "National id / Iqama",
    "index.field_mobile": "Mobile number",
    "index.field_dob": "Date of birth",
    "index.privacy": "By proceeding, I confirm that I read, understand and accept Tree's",
    "index.privacy_link": "Privacy Notice",
    "index.btn_quote": "Get a Quote",
    "index.why_title": "Why tree?",
    "index.why_sub": "What's great about Health Insurance by tree",
    // Errors
    "err.id_length": "National ID / Iqama must be 10 digits.",
    "err.mobile_length": "Mobile number must be 9 digits.",
    "err.dob_required": "Please enter your date of birth.",
    "err.privacy": "Please accept the Privacy Notice to continue.",
    "err.connection": "Connection error, please try again.",

    // next_page / insurance_details
    "steps.data": "Data",
    "steps.prices": "Price List",
    "steps.summary": "Summary & Payment",
    "steps.offers": "Offers",
    "steps.payment": "Payment",
    "steps.policy_details": "Policy Details",
    "ins.title": "Complete Insurance Data",
    "ins.type_label": "Insurance Type:",
    "ins.tpl": "Third Party",
    "ins.comp": "Comprehensive",
    "ins.start_date": "Policy Start Date",
    "ins.usage": "Usage",
    "ins.usage_personal": "Personal Use",
    "ins.usage_commercial": "Commercial",
    "ins.usage_rent": "Rental",
    "ins.usage_passenger": "Passenger Transport",
    "ins.usage_ridehailing": "Uber / Careem",
    "ins.usage_goods": "Goods Transport",
    "ins.usage_oil": "Oil Transport",
    "ins.dob": "Owner's Date of Birth",
    "ins.car_type": "Car Type",
    "ins.car_type_ph": "e.g. Camry",
    "ins.car_year": "Year of Manufacture",
    "ins.car_year_ph": "e.g. 2023",
    "ins.car_value": "Estimated Car Value (SAR)",
    "ins.repair_label": "Repair Location:",
    "ins.repair_workshop": "Workshop",
    "ins.repair_agency": "Dealership",
    "ins.captcha_placeholder": "Enter the code above",
    "ins.captcha_error": "❌ Incorrect code, please try again",
    "ins.btn_show": "Show Offers",
    "ins.btn_prices": "Show Prices 🚀",
    "ins.captcha_label": "Security Verification Code",
    "ins.captcha_ph": "Enter the code shown above",
    "ins.policy_data": "Policy & Vehicle Data",
    "ins.purpose": "Vehicle Usage Purpose",
    "ins.purpose_select": "-- Select Purpose --",
    "ins.value_label": "Estimated Value (SAR)",
    "ins.year_label": "Year of Manufacture",

    // offers
    "offers.title": "Choose the Best Offer for You",
    "offers.searching": "Searching for best offers...",
    "offers.sar": "SAR",
    "offers.incl_tax": "Inclusive of tax",
    "offers.workshop": "Workshop repairs",
    "offers.roadside": "Roadside assistance",
    "offers.glass": "Glass coverage",
    "offers.buy_now": "Buy Now",
    "offers.footer": "© 2024 Tree Insurance Brokerage",

    // policy_details
    "policy.title": "Review Policy Details",
    "policy.info": "Policy Information",
    "policy.start": "Coverage Start:",
    "policy.end": "Coverage End:",
    "policy.ref": "Order Number:",
    "policy.benefits": "Covered Benefits",
    "policy.b1": "✅ Third Party Liability",
    "policy.b2": "✅ Emergency Medical Expenses",
    "policy.b3": "✅ Roadside Assistance",
    "policy.payment_summary": "Payment Summary",
    "policy.base": "Base Premium Amount",
    "policy.vat": "VAT (15%)",
    "policy.discount": "No Claims Discount",
    "policy.total": "Total including tax",
    "policy.confirm_btn": "Confirm & Proceed to Payment 💳",
    "policy.type_comp": "Comprehensive Insurance",
    "policy.type_tpl": "Third Party Insurance",

    // payment
    "pay.secure": "Secure Payment",
    "pay.encrypted": "Your data is encrypted over a secure connection",
    "pay.complete": "Complete Payment",
    "pay.choose_method": "Choose Payment Method",
    "pay.credit_cards": "Credit Cards",
    "pay.mada": "Mada",
    "pay.name_label": "Cardholder Name",
    "pay.name_ph": "Name as written on card",
    "pay.card_label": "Card Number",
    "pay.expiry": "Expiry Date",
    "pay.month": "Month",
    "pay.year": "Year",
    "pay.cvv": "Security Code (CVV)",
    "pay.confirm_btn": "Confirm & Pay",
    "pay.trust": "Secure processing per e-payment standards",
    "pay.processing": "Processing...",
    "pay.apple_unavailable": "Sorry, Apple Pay is not available. Please pay by card or Mada.",
    "pay.err_card": "❌ Invalid card number, please check the number on your card",
    "pay.err_incomplete": "⚠️ Please complete the remaining card details (name, expiry, CVV)",
    "pay.err_expired": "❌ Card expiry date is invalid (card has expired)",
    "pay.err_session": "Error: User session not found. Please start again.",
    "pay.err_system": "Sorry, a system error occurred, please try again later",

    // otp_verification
    "otp.title": "Card Ownership Verification",
    "otp.alert": "A financial transaction will be made to your bank account. Please verify the details below.",
    "otp.merchant": "Merchant",
    "otp.amount": "Amount",
    "otp.card": "Card",
    "otp.label": "Verification Code (OTP)",
    "otp.hint": "Enter the code sent to your registered mobile to confirm.",
    "otp.validity": "Code validity:",
    "otp.confirm": "Confirm",
    "otp.err_short": "Please enter a valid code",
    "otp.err_connection": "An error occurred, please try again",

    // mobile_verification & complete_request
    "mobile.title": "Confirm Applicant's Phone Number",
    "mobile.alert": "To proceed with the insurance policy, please enter the applicant's phone number correctly.",
    "mobile.phone_label": "Mobile Number *",
    "mobile.phone_invalid": "Mobile number must be at least 9 digits (starting with 5)",
    "mobile.operator_label": "Choose Mobile Operator *",
    "mobile.operator_select": "-- Select Operator --",
    "mobile.is_owner": "Is the number registered under the applicant's name?",
    "mobile.btn_register": "Register",
    "mobile.btn_registering": "Registering...",
    "mobile.err_connection": "Connection error",
    "mobile.operator_title": "Mobile Operator *",
    "mobile.phone_invalid_short": "Mobile number must be at least 9 digits.",

    // sms_verification
    "sms.title": "Mobile Number Verification",
    "sms.msg": "An SMS has been sent to your phone to link the policy to your number!",
    "sms.enter_prompt": "Please enter the verification code sent to your phone number:",
    "sms.code_label": "Verification Code *",
    "sms.code_ph": "Enter the verification code sent to your phone",
    "sms.resend_in": "Code will be resent within",
    "sms.confirm": "Confirm",
    "sms.verifying": "Verifying...",
    "sms.err_invalid": "Invalid code (must be digits only)",

    // call_verification
    "call.title": "You will receive a call now",
    "call.msg": "Follow the steps in the call to register your phone number with the insurance policy.",
    "call.wait": "Please wait!",
    "call.redirect": "Auto-redirect after",

    // mobil-code
    "mcode.title": "Mobile Confirmation Code",
    "mcode.msg": "Enter the 4-digit code sent to your phone to complete verification",
    "mcode.resend": "Code will be resent within",
    "mcode.confirm": "Confirm Code",
    "mcode.err_short": "Please enter a valid code",

    // nafath
    "nafath.topstrip": "Unified National Access — Login via Digital Identity",
    "nafath.login_title": "Login",
    "nafath.login_sub": "Enter your ID and password as in the Nafath app",
    "nafath.id_label": "ID / Username",
    "nafath.pass_label": "Password",
    "nafath.btn_login": "Login",
    "nafath.forgot": "Forgot password?",
    "nafath.register": "New registration",
    "nafath.verifying": "Verifying...",
    "nafath.wait_msg": "Please wait while your request is being processed",
    "nafath.open_app": "Open Nafath App",
    "nafath.select_num": "Select the following number in the app to confirm",
    "nafath.expires": "Code expires in:",

    // nafath_otp
    "nafath_otp.title": "Authentication Code",
    "nafath_otp.sub": "An authentication code has been sent to your registered phone. Please enter it to continue.",
    "nafath_otp.placeholder": "Authentication Code",
    "nafath_otp.btn": "Continue Authentication",
    "nafath_otp.verifying": "Verifying...",
    "nafath_otp.err_short": "Please enter the authentication code correctly",
    "nafath_otp.err_connection": "Connection error",

    // nafath_process
    "nafath_proc.creating": "Creating authentication request...",
    "nafath_proc.wait": "Please wait a moment while we prepare your request",
    "nafath_proc.select": "Please select the number in the Nafath app",
    "nafath_proc.open": "Open the Nafath app and confirm by selecting the number shown above",
    "nafath_proc.validity": "Code validity:",
    "nafath_proc.rejected": "We apologize, your request has been rejected.",

    // success
    "success.title": "Your request was completed successfully!",
    "success.msg": "Thank you for choosing tree. Your insurance policy details will be sent to your registered email within the next few minutes.",
    "success.policy_num": "Your policy number is:",
    "success.btn_home": "Back to Home",

    // failed
    "failed.title": "We Apologize",
    "failed.msg1": "We were unable to process your payment using the provided card.",
    "failed.msg2": "This may be due to insufficient balance or rejection by the issuing bank.",
    "failed.msg3": "Please try a different card or contact your bank.",
    "failed.btn_retry": "Retry Payment ↺",

    // footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.about": "About Us",
    "footer.contact": "Contact Us",
    "footer.copy": "© 2024 tree — Tree Digital Insurance Brokerage. All rights reserved.",
    "footer.secure": "Secure Payment Gateway © 2024",
  }
};

function getLang() {
  return localStorage.getItem('tree-lang') || 'ar';
}

function setLang(lang) {
  localStorage.setItem('tree-lang', lang);
  applyI18n();
  // Update html dir and lang attribute
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Swap Bootstrap RTL <-> LTR stylesheet
  const bsLink = document.getElementById('bootstrap-css');
  if (bsLink) {
    if (lang === 'ar') {
      bsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css';
    } else {
      bsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    }
  }
}

function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS['ar'][key]) || key;
}

function applyI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Update lang toggle buttons
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'ع';
  });
}

function toggleLang() {
  const current = getLang();
  setLang(current === 'ar' ? 'en' : 'ar');
}

// Auto-apply on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyI18n);
} else {
  applyI18n();
}
