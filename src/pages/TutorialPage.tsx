import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  UserPlus, 
  Sparkles, 
  Users, 
  Lock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2,
  Heart,
  Info
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const steps = [
  {
    id: "welcome",
    title: "tutorial.welcome_title",
    description: "tutorial.welcome_desc",
    icon: Heart,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "registration",
    title: "tutorial.reg_title",
    description: "tutorial.reg_desc",
    icon: UserPlus,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "assessment",
    title: "tutorial.assessment_title",
    description: "tutorial.assessment_desc",
    icon: Sparkles,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "guardian",
    title: "tutorial.guardian_title",
    description: "tutorial.guardian_desc",
    icon: Shield,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "privacy",
    title: "tutorial.privacy_title",
    description: "tutorial.privacy_desc",
    icon: Lock,
    color: "text-purple-600",
    bg: "bg-purple-50",
  }
];

export default function TutorialPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/auth');
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentStep ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className={`h-48 ${step.bg} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Icon className={`w-24 h-24 ${step.color}`} />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-current" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-current" />
                </div>
              </div>

              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-bold text-primary">
                    {t(step.title)}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>

                {/* Interactive Element (Mockup) */}
                <div className="py-6 min-h-[120px] flex items-center justify-center">
                  {currentStep === 0 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-primary italic font-medium text-lg"
                    >
                      {isRtl ? "«خيركم خيركم لأهله»" : "\"The best of you are those who are best to their families.\""}
                    </motion.div>
                  )}
                  {currentStep === 1 && (
                    <div className="w-full max-w-xs space-y-3">
                      <div className="h-10 bg-muted rounded flex items-center px-3 gap-2 border border-muted-foreground/20">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                        <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg border border-dashed border-muted-foreground/30 text-xs text-muted-foreground flex items-center gap-3">
                        <Shield className="w-4 h-4 text-primary" />
                        {isRtl ? "بياناتك مشفرة ومحمية بأعلى معايير الأمان." : "Your data is encrypted and protected with the highest security standards."}
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="w-full max-w-sm space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg border border-primary/10 text-left">
                        <p className="text-xs font-semibold text-primary mb-2">{isRtl ? "سؤال تجريبي:" : "Sample Question:"}</p>
                        <p className="text-sm mb-3">{isRtl ? "كيف تتعامل مع الخلاف في العلاقة؟" : "How do you handle conflict in a relationship?"}</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-background rounded border border-primary/20 flex items-center justify-center text-[10px]">{isRtl ? "نقاش هادئ" : "Calm Discussion"}</div>
                          <div className="h-8 bg-background rounded border border-primary/20 flex items-center justify-center text-[10px]">{isRtl ? "وقت للهدوء" : "Cooldown Time"}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <Users className="w-6 h-6" />
                        </div>
                        <div className="w-8 h-px bg-muted-foreground/30" />
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <Shield className="w-6 h-6" />
                        </div>
                      </div>
                      <p className="text-xs font-medium text-muted-foreground max-w-[200px]">
                        {isRtl ? "ولي الأمر يراجع طلبات التواصل لضمان الجدية." : "The Guardian reviews interaction requests to ensure seriousness."}
                      </p>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div className="relative group cursor-pointer">
                      <div className="w-24 h-24 rounded-2xl bg-muted overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md flex items-center justify-center">
                          <Lock className="w-8 h-8 text-primary/40" />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-background shadow-lg rounded-full p-1.5 border border-primary/20">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-[10px] mt-3 text-muted-foreground text-center">
                        {isRtl ? "صورك مخفية افتراضياً" : "Photos hidden by default"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {currentStep > 0 && (
                    <Button 
                      variant="outline" 
                      onClick={prev}
                      className="flex-1 h-12"
                    >
                      {isRtl ? <ArrowRight className="ml-2 w-4 h-4" /> : <ArrowLeft className="mr-2 w-4 h-4" />}
                      {t('onboarding.back')}
                    </Button>
                  )}
                  <Button 
                    onClick={next}
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 text-lg font-semibold"
                  >
                    {currentStep === steps.length - 1 ? t('tutorial.get_started') : t('onboarding.next')}
                    {currentStep < steps.length - 1 && (
                      isRtl ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 text-center">
          <Button 
            variant="link" 
            onClick={() => navigate('/auth')}
            className="text-muted-foreground hover:text-primary"
          >
            {t('tutorial.skip')}
          </Button>
        </div>
      </div>
    </div>
  );
}
