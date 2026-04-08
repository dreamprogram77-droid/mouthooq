import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { User, BookOpen, Heart, Shield, Sparkles, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { geminiService } from "@/services/geminiService";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

export default function OnboardingPage() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const navigate = useNavigate();

  const isRtl = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    location: "",
    bio: "",
    prayerFrequency: "",
    marriageExpectations: "",
    hasGuardian: false,
    guardianName: "",
    guardianPhone: "",
    guardianRelation: "",
  });

  const [assessment, setAssessment] = useState({
    conflictStyle: "",
    marriageGoal: "",
    financialReadiness: "",
    socialPreference: "",
    decisionMaking: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAssessmentChange = (field: string, value: string) => {
    setAssessment(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    setStep(4);
    try {
      const result = await geminiService.analyzeAssessment(formData as any, assessment);
      setAnalysisResult(result || "Analysis failed. Please try again.");
    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysisResult("An error occurred during analysis. Please proceed to dashboard.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  step >= i ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted text-muted-foreground"
                }`}
              >
                {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold flex items-center gap-2">
                    <User className="w-6 h-6 text-primary" />
                    {t('onboarding.step1_title')}
                  </CardTitle>
                  <CardDescription>{t('onboarding.step1_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t('onboarding.full_name')}</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe" 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">{t('onboarding.gender')}</Label>
                      <Select onValueChange={(v) => handleInputChange("gender", v)} value={formData.gender}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('onboarding.gender')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">{t('onboarding.age')}</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        placeholder="25" 
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">{t('onboarding.location')}</Label>
                      <Input 
                        id="location" 
                        placeholder="City, Country" 
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">{t('onboarding.about_me')}</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="..." 
                      className="h-32" 
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={nextStep} className="bg-primary hover:bg-primary/90">
                      {t('onboarding.next')} {isRtl ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    {t('onboarding.step2_title')}
                  </CardTitle>
                  <CardDescription>{t('onboarding.step2_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>{t('onboarding.religious_practice')}</Label>
                    <Select onValueChange={(v) => handleInputChange("prayerFrequency", v)} value={formData.prayerFrequency}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('onboarding.religious_practice')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="always">Always (5 times daily)</SelectItem>
                        <SelectItem value="usually">Usually</SelectItem>
                        <SelectItem value="sometimes">Sometimes</SelectItem>
                        <SelectItem value="rarely">Rarely</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label>{t('onboarding.marriage_expectations')}</Label>
                    <Textarea 
                      placeholder="..." 
                      className="h-32" 
                      value={formData.marriageExpectations}
                      onChange={(e) => handleInputChange("marriageExpectations", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Checkbox 
                      id="guardian" 
                      checked={formData.hasGuardian}
                      onCheckedChange={(v) => handleInputChange("hasGuardian", !!v)}
                    />
                    <Label htmlFor="guardian" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {t('onboarding.guardian_involvement')}
                    </Label>
                  </div>

                  {formData.hasGuardian && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-4 pt-4 border-t"
                    >
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        {t('onboarding.guardian_title')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('onboarding.guardian_desc')}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="guardianName">{t('onboarding.guardian_name')}</Label>
                          <Input 
                            id="guardianName" 
                            value={formData.guardianName}
                            onChange={(e) => handleInputChange("guardianName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guardianPhone">{t('onboarding.guardian_phone')}</Label>
                          <Input 
                            id="guardianPhone" 
                            value={formData.guardianPhone}
                            onChange={(e) => handleInputChange("guardianPhone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="guardianRelation">{t('onboarding.guardian_relation')}</Label>
                          <Input 
                            id="guardianRelation" 
                            placeholder={t('onboarding.guardian_relation_placeholder')}
                            value={formData.guardianRelation}
                            onChange={(e) => handleInputChange("guardianRelation", e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      {isRtl ? <ArrowRight className="ml-2 w-4 h-4" /> : <ArrowLeft className="mr-2 w-4 h-4" />} {t('onboarding.back')}
                    </Button>
                    <Button onClick={nextStep} className="bg-primary hover:bg-primary/90">
                      {t('onboarding.next')} {isRtl ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    {t('onboarding.step3_title')}
                  </CardTitle>
                  <CardDescription>{t('onboarding.step3_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="italic text-primary font-medium mb-4">"Marriage is not just about finding the right person, but being the right person."</p>
                    <p className="text-sm text-muted-foreground">This assessment evaluates your personality, values, and readiness for a committed relationship.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>How do you handle conflict in a relationship?</Label>
                      <Select onValueChange={(v) => handleAssessmentChange("conflictStyle", v)} value={assessment.conflictStyle}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="direct">I prefer to discuss things immediately and calmly.</SelectItem>
                          <SelectItem value="cooldown">I need some time to cool down before talking.</SelectItem>
                          <SelectItem value="avoidant">I tend to avoid conflict if possible.</SelectItem>
                          <SelectItem value="expressive">I express my feelings strongly and directly.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>What is your primary goal for the first year of marriage?</Label>
                      <Select onValueChange={(v) => handleAssessmentChange("marriageGoal", v)} value={assessment.marriageGoal}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="connection">Building a strong emotional connection.</SelectItem>
                          <SelectItem value="stability">Establishing a stable home and finances.</SelectItem>
                          <SelectItem value="family">Starting a family as soon as possible.</SelectItem>
                          <SelectItem value="experience">Traveling and experiencing life together.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Are you financially prepared for the responsibilities of marriage?</Label>
                      <Select onValueChange={(v) => handleAssessmentChange("financialReadiness", v)} value={assessment.financialReadiness}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ready">Yes, I have a stable income and savings.</SelectItem>
                          <SelectItem value="working">I am working towards financial stability.</SelectItem>
                          <SelectItem value="not_yet">Not quite yet, but I have a plan.</SelectItem>
                          <SelectItem value="family_support">I rely on family support for now.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>How do you prefer to spend your free time?</Label>
                      <Select onValueChange={(v) => handleAssessmentChange("socialPreference", v)} value={assessment.socialPreference}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">Socializing with friends and family.</SelectItem>
                          <SelectItem value="private">Quiet time at home or personal hobbies.</SelectItem>
                          <SelectItem value="balanced">A mix of both social and private time.</SelectItem>
                          <SelectItem value="active">Outdoor activities and adventures.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>How do you view the role of a spouse in major decision making?</Label>
                      <Select onValueChange={(v) => handleAssessmentChange("decisionMaking", v)} value={assessment.decisionMaking}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equal">Equal partnership in all decisions.</SelectItem>
                          <SelectItem value="consultative">Consultation but one person takes lead.</SelectItem>
                          <SelectItem value="traditional">Traditional roles based on expertise.</SelectItem>
                          <SelectItem value="independent">Mostly independent with some consultation.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      {isRtl ? <ArrowRight className="ml-2 w-4 h-4" /> : <ArrowLeft className="mr-2 w-4 h-4" />} {t('onboarding.back')}
                    </Button>
                    <Button onClick={runAnalysis} className="bg-primary hover:bg-primary/90">
                      {t('onboarding.analyze')} <Sparkles className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    {t('onboarding.step4_title')}
                  </CardTitle>
                  <CardDescription>{t('onboarding.step4_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isAnalyzing ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                      <p className="text-muted-foreground animate-pulse">Analyzing...</p>
                    </div>
                  ) : (
                    <div className="prose prose-emerald max-w-none">
                      <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 overflow-auto max-h-[400px]">
                        <div className="text-sm leading-relaxed">
                          <ReactMarkdown>
                            {analysisResult || ""}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!isAnalyzing && (
                    <div className="flex justify-end">
                      <Button onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        {t('onboarding.continue')} {isRtl ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-primary">{t('onboarding.step5_title')}</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t('onboarding.step5_desc')}
                </p>
              </div>
              <Button onClick={() => navigate('/dashboard')} size="lg" className="px-12 h-14 bg-primary hover:bg-primary/90">
                {t('onboarding.go_dashboard')}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
