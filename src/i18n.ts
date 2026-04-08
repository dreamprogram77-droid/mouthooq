import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "training": "Training",
        "values": "Our Values",
        "privacy": "Privacy",
        "signIn": "Sign In",
        "join": "Join Mithaq"
      },
      "landing": {
        "hero_badge": "Marriage with Purpose & Privacy",
        "hero_title": "A Sacred Bond,",
        "hero_title_italic": "Intelligently Matched.",
        "hero_desc": "Mithaq is a structured matchmaking platform designed for those seeking serious marriage partners through a respectful, secure, and values-aligned process.",
        "start_journey": "Start Your Journey",
        "learn_process": "Learn Our Process",
        "trust_title": "Built on Trust and Privacy",
        "trust_desc": "We prioritize your values and security at every step of the matchmaking process.",
        "privacy_title": "Privacy First",
        "privacy_desc": "Your photos and sensitive data remain hidden until you approve a serious request.",
        "guardian_title": "Guardian Integration",
        "guardian_desc": "Optional Wali (Guardian) involvement to ensure a respectful and transparent process.",
        "ai_title": "AI Compatibility",
        "ai_desc": "Advanced algorithms analyze values, personality, and readiness for long-term success.",
        "process_title": "The Mithaq Process",
        "cta_title": "Ready to find your life partner?",
        "cta_desc": "Join a community of individuals committed to building strong, values-based marriages.",
        "create_profile": "Create Your Profile"
      },
      "footer": {
        "terms": "Terms of Service",
        "privacy": "Privacy Policy",
        "contact": "Contact Support",
        "rights": "All rights reserved."
      },
      "auth": {
        "title": "Welcome to Mithaq",
        "desc": "A secure and respectful path to marriage.",
        "phone_label": "Phone Number",
        "phone_placeholder": "+966 5X XXX XXXX",
        "send_otp": "Send Verification Code",
        "otp_desc": "We will send a secure code to your phone for verification."
      },
      "onboarding": {
        "step1_title": "Personal Information",
        "step1_desc": "Tell us about yourself. This information helps us find compatible matches.",
        "step2_title": "Values & Lifestyle",
        "step2_desc": "Your values are the foundation of a successful marriage.",
        "step3_title": "Compatibility Assessment",
        "step3_desc": "Complete this quick assessment to help our AI find your best matches.",
        "step4_title": "AI Matchmaker Analysis",
        "step4_desc": "Our AI is processing your profile to provide deep insights.",
        "step5_title": "Profile Secured & Ready",
        "step5_desc": "Your profile has been created and your assessment has been analyzed. Your privacy is our priority—sensitive data is now hidden.",
        "full_name": "Full Name",
        "gender": "Gender",
        "age": "Age",
        "location": "Location",
        "about_me": "About Me",
        "religious_practice": "Religious Practice",
        "marriage_expectations": "Marriage Expectations",
        "guardian_involvement": "I would like to involve a Guardian (Wali) in my process",
        "guardian_title": "Guardian Details",
        "guardian_desc": "Please provide the contact details of your guardian (Wali) for verification.",
        "guardian_name": "Guardian's Full Name",
        "guardian_phone": "Guardian's Phone Number",
        "guardian_relation": "Relation to Guardian",
        "guardian_relation_placeholder": "e.g. Father, Brother, Uncle",
        "next": "Next Step",
        "back": "Back",
        "complete": "Complete",
        "analyze": "Analyze Compatibility",
        "continue": "Continue",
        "go_dashboard": "Go to Dashboard"
      },
      "dashboard": {
        "title": "Your Matches",
        "desc": "AI-curated suggestions based on your compatibility profile.",
        "training_title": "Marriage Readiness Training",
        "training_desc": "Complete your educational modules to increase your compatibility score.",
        "continue_learning": "Continue Learning",
        "ai_assistant": "AI Matchmaker Assistant",
        "ai_assistant_desc": "Ask for advice on compatibility, communication, or the marriage process.",
        "view_profile": "View Profile",
        "guardian_status": "Guardian Status",
        "guardian_verified": "Verified",
        "guardian_pending": "Pending Verification",
        "guardian_none": "Not Added"
      },
      "profile": {
        "send_request": "Send Request to Guardian",
        "request_sent": "Request Sent",
        "request_pending": "Pending Approval",
        "request_approved": "Approved",
        "request_rejected": "Rejected",
        "privacy_notice": "Photos and sensitive data are hidden until guardian approval."
      },
      "guardian": {
        "dashboard_title": "Guardian Dashboard",
        "pending_requests": "Pending Interaction Requests",
        "ward_profile": "Ward's Profile",
        "requester_profile": "Requester's Profile",
        "approve": "Approve Request",
        "reject": "Reject Request",
        "no_requests": "No pending requests at this time."
      },
      "tutorial": {
        "welcome_title": "Welcome to Mithaq",
        "welcome_desc": "A professional platform dedicated to serious marriage intentions, built on trust, privacy, and cultural respect.",
        "reg_title": "Secure Registration",
        "reg_desc": "Your journey begins with a secure verification. We protect your identity and ensure every member is verified for a safe community.",
        "assessment_title": "Values Assessment",
        "assessment_desc": "Our AI analyzes your personality and values to find matches that align with your life goals, not just surface-level traits.",
        "guardian_title": "Guardian Involvement",
        "guardian_desc": "We support traditional values by allowing optional Guardian (Wali) involvement, ensuring transparency and respect in every interaction.",
        "privacy_title": "Privacy First",
        "privacy_desc": "Your photos and sensitive data are hidden by default. You only share what you want, when you want, with guardian oversight.",
        "get_started": "Get Started",
        "skip": "Skip Tutorial"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "training": "التدريب",
        "values": "قيمنا",
        "privacy": "الخصوصية",
        "signIn": "تسجيل الدخول",
        "join": "انضم إلى ميثاق"
      },
      "landing": {
        "hero_badge": "زواج بهدف وخصوصية",
        "hero_title": "رابط مقدس،",
        "hero_title_italic": "متوافق بذكاء.",
        "hero_desc": "ميثاق هي منصة زواج منظمة مصممة للباحثين عن شركاء حياة جادين من خلال عملية محترمة وآمنة ومتوافقة مع القيم.",
        "start_journey": "ابدأ رحلتك",
        "learn_process": "تعرف على عمليتنا",
        "trust_title": "مبني على الثقة والخصوصية",
        "trust_desc": "نحن نعطي الأولوية لقيمك وأمنك في كل خطوة من عملية التوفيق.",
        "privacy_title": "الخصوصية أولاً",
        "privacy_desc": "تظل صورك وبياناتك الحساسة مخفية حتى توافق على طلب جاد.",
        "guardian_title": "إشراك ولي الأمر",
        "guardian_desc": "إشراك اختياري لولي الأمر لضمان عملية محترمة وشفافة.",
        "ai_title": "التوافق بالذكاء الاصطناعي",
        "ai_desc": "خوارزميات متقدمة تحلل القيم والشخصية والجاهزية للنجاح على المدى الطويل.",
        "process_title": "عملية ميثاق",
        "cta_title": "هل أنت مستعد للعثور على شريك حياتك؟",
        "cta_desc": "انضم إلى مجتمع من الأفراد الملتزمين ببناء زيجات قوية قائمة على القيم.",
        "create_profile": "أنشئ ملفك الشخصي"
      },
      "footer": {
        "terms": "شروط الخدمة",
        "privacy": "سياسة الخصوصية",
        "contact": "اتصل بالدعم",
        "rights": "جميع الحقوق محفوظة."
      },
      "auth": {
        "title": "مرحباً بك في ميثاق",
        "desc": "مسار آمن ومحترم للزواج.",
        "phone_label": "رقم الهاتف",
        "phone_placeholder": "+966 5X XXX XXXX",
        "send_otp": "إرسال رمز التحقق",
        "otp_desc": "سنرسل رمزاً آمناً إلى هاتفك للتحقق."
      },
      "onboarding": {
        "step1_title": "المعلومات الشخصية",
        "step1_desc": "أخبرنا عن نفسك. تساعدنا هذه المعلومات في العثور على مطابقات متوافقة.",
        "step2_title": "القيم وأسلوب الحياة",
        "step2_desc": "قيمك هي أساس الزواج الناجح.",
        "step3_title": "تقييم التوافق",
        "step3_desc": "أكمل هذا التقييم السريع لمساعدة ذكائنا الاصطناعي في العثور على أفضل المطابقات لك.",
        "step4_title": "تحليل منسق ميثاق الذكي",
        "step4_desc": "يقوم ذكاؤنا الاصطناعي بمعالجة ملفك الشخصي لتقديم رؤى عميقة.",
        "step5_title": "الملف الشخصي مؤمن وجاهز",
        "step5_desc": "تم إنشاء ملفك الشخصي وتحليل تقييمك. خصوصيتك هي أولويتنا - البيانات الحساسة مخفية الآن.",
        "full_name": "الاسم الكامل",
        "gender": "الجنس",
        "age": "العمر",
        "location": "الموقع",
        "about_me": "نبذة عني",
        "religious_practice": "الممارسة الدينية",
        "marriage_expectations": "توقعات الزواج",
        "guardian_involvement": "أرغب في إشراك ولي أمر في عمليتي",
        "guardian_title": "تفاصيل ولي الأمر",
        "guardian_desc": "يرجى تقديم تفاصيل الاتصال بولي أمرك للتحقق.",
        "guardian_name": "اسم ولي الأمر الكامل",
        "guardian_phone": "رقم هاتف ولي الأمر",
        "guardian_relation": "صلة القرابة",
        "guardian_relation_placeholder": "مثال: أب، أخ، عم",
        "next": "الخطوة التالية",
        "back": "رجوع",
        "complete": "إكمال",
        "analyze": "تحليل التوافق",
        "continue": "متابعة",
        "go_dashboard": "الذهاب إلى لوحة التحكم"
      },
      "dashboard": {
        "title": "مطابقاتك",
        "desc": "اقتراحات منسقة بواسطة الذكاء الاصطناعي بناءً على ملف التوافق الخاص بك.",
        "training_title": "التدريب على الجاهزية للزواج",
        "training_desc": "أكمل وحداتك التعليمية لزيادة درجة التوافق الخاصة بك.",
        "continue_learning": "متابعة التعلم",
        "ai_assistant": "مساعد ميثاق الذكي",
        "ai_assistant_desc": "اطلب المشورة بشأن التوافق أو التواصل أو عملية الزواج.",
        "view_profile": "عرض الملف الشخصي",
        "guardian_status": "حالة ولي الأمر",
        "guardian_verified": "تم التحقق",
        "guardian_pending": "قيد التحقق",
        "guardian_none": "لم يتم الإضافة"
      },
      "profile": {
        "send_request": "إرسال طلب لولي الأمر",
        "request_sent": "تم إرسال الطلب",
        "request_pending": "قيد الموافقة",
        "request_approved": "تمت الموافقة",
        "request_rejected": "تم الرفض",
        "privacy_notice": "الصور والبيانات الحساسة مخفية حتى موافقة ولي الأمر."
      },
      "guardian": {
        "dashboard_title": "لوحة تحكم ولي الأمر",
        "pending_requests": "طلبات التواصل المعلقة",
        "ward_profile": "ملف المخطوبة",
        "requester_profile": "ملف الخاطب",
        "approve": "موافقة على الطلب",
        "reject": "رفض الطلب",
        "no_requests": "لا توجد طلبات معلقة حالياً."
      },
      "tutorial": {
        "welcome_title": "مرحباً بك في ميثاق",
        "welcome_desc": "منصة احترافية مخصصة لنوايا الزواج الجادة، مبنية على الثقة والخصوصية والاحترام الثقافي.",
        "reg_title": "تسجيل آمن",
        "reg_desc": "تبدأ رحلتك بـتحقق آمن. نحن نحمي هويتك ونضمن التحقق من كل عضو لضمان مجتمع آمن.",
        "assessment_title": "تقييم القيم",
        "assessment_desc": "يقوم ذكاؤنا الاصطناعي بتحليل شخصيتك وقيمك للعثور على مطابقات تتماشى مع أهداف حياتك، وليس فقط الصفات السطحية.",
        "guardian_title": "إشراك ولي الأمر",
        "guardian_desc": "نحن ندعم القيم التقليدية من خلال السماح بإشراك اختياري لولي الأمر (الولي)، مما يضمن الشفافية والاحترام في كل تواصل.",
        "privacy_title": "الخصوصية أولاً",
        "privacy_desc": "صورك وبياناتك الحساسة مخفية افتراضياً. أنت تشارك فقط ما تريد، متى تريد، وبإشراف ولي الأمر.",
        "get_started": "ابدأ الآن",
        "skip": "تخطي التعليمات"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
