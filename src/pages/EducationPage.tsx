import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { EDUCATION_MODULES } from "@/constants/education";
import { useTranslation } from "react-i18next";

export default function EducationPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  // Mock progress tracking
  const completedModules = ["communication"];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">{t('dashboard.training_title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('dashboard.training_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_MODULES.map((module, index) => {
            const isCompleted = completedModules.includes(module.id);
            const Icon = module.icon;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-none shadow-lg transition-all hover:shadow-xl ${isCompleted ? 'bg-primary/5 border border-primary/10' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      {isCompleted && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-none">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> {isRtl ? 'مكتمل' : 'Completed'}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold">{module.title}</CardTitle>
                    <CardDescription className="text-base">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {module.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {module.quiz.length} {isRtl ? 'أسئلة' : 'Quiz Questions'}</span>
                    </div>
                    
                    <Link to={`/education/${module.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 group">
                        {isCompleted ? (isRtl ? 'مراجعة الوحدة' : 'Review Module') : (isRtl ? 'بدء التعلم' : 'Start Learning')}
                        {isRtl ? <ArrowLeft className="ml-2 w-4 h-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-secondary/10 rounded-2xl border border-secondary/20 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">{isRtl ? 'لماذا التدريب مهم؟' : 'Why Training Matters'}</h2>
          <p className="text-muted-foreground italic">
            {isRtl ? '"خيركم خيركم لأهله." الاستثمار في مهارات علاقتك هو عمل عبادي والتزام بسعادة شريك حياتك المستقبلي.' : '"The best of you are those who are best to their families." Investing in your relationship skills is an act of worship and a commitment to your future spouse\'s happiness.'}
          </p>
        </div>
      </div>
    </div>
  );
}
