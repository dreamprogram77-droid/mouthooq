import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Sparkles, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { EDUCATION_MODULES } from "@/constants/education";
import { toast } from "sonner";

export default function ModulePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const module = EDUCATION_MODULES.find(m => m.id === id);
  
  const [view, setView] = useState<"content" | "quiz" | "result">("content");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState(0);

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Module not found</h1>
        <Link to="/education">
          <Button>Back to Education</Button>
        </Link>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    let correctCount = 0;
    module.quiz.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setView("result");
    toast.success("Assessment completed!");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/education" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Modules
          </Link>

          <AnimatePresence mode="wait">
            {view === "content" && (
              <motion.div
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-none shadow-lg">
                  <CardHeader className="border-b bg-primary/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <module.icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/20 text-primary">Module</Badge>
                    </div>
                    <CardTitle className="text-3xl font-heading font-bold">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <div className="prose prose-emerald max-w-none mb-12">
                      <ReactMarkdown>{module.content}</ReactMarkdown>
                    </div>
                    <div className="flex justify-end pt-8 border-t">
                      <Button onClick={() => setView("quiz")} className="bg-primary hover:bg-primary/90">
                        Take Assessment <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {view === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-none shadow-lg">
                  <CardHeader className="border-b bg-secondary/5">
                    <CardTitle className="text-2xl font-heading font-bold flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-secondary" />
                      Module Assessment
                    </CardTitle>
                    <CardDescription>Test your understanding of {module.title}.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8 space-y-8">
                    {module.quiz.map((q, idx) => (
                      <div key={q.id} className="space-y-4">
                        <h3 className="text-lg font-medium">{idx + 1}. {q.question}</h3>
                        <RadioGroup 
                          onValueChange={(val) => setAnswers(prev => ({ ...prev, [q.id]: parseInt(val) }))}
                          value={answers[q.id]?.toString()}
                        >
                          {q.options.map((opt, optIdx) => (
                            <div key={optIdx} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value={optIdx.toString()} id={`${q.id}-${optIdx}`} />
                              <Label htmlFor={`${q.id}-${optIdx}`} className="flex-1 cursor-pointer">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                    <div className="flex justify-between pt-8 border-t">
                      <Button variant="outline" onClick={() => setView("content")}>
                        Back to Content
                      </Button>
                      <Button 
                        onClick={handleQuizSubmit} 
                        className="bg-primary hover:bg-primary/90"
                        disabled={Object.keys(answers).length < module.quiz.length}
                      >
                        Submit Assessment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {view === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-heading font-bold text-primary">Module Completed!</h2>
                  <p className="text-xl font-medium">Your Score: {score} / {module.quiz.length}</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Great job! You've successfully completed the {module.title} module. 
                    This knowledge will serve as a valuable foundation for your future marriage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate('/education')} variant="outline" className="px-8">
                    Back to Modules
                  </Button>
                  <Button onClick={() => navigate('/dashboard')} className="px-8 bg-primary hover:bg-primary/90">
                    Go to Dashboard
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
