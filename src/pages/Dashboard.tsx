import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Heart, MessageSquare, Shield, Sparkles, Send, UserCheck, Info, MapPin, Briefcase, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const isRtl = i18n.language === 'ar';
  
  const suggestions = [
    {
      id: "1",
      name: "User #8291",
      age: 27,
      location: "London, UK",
      profession: "Software Engineer",
      compatibility: 94,
      reason: "High alignment in family values and lifestyle preferences.",
      tags: ["Practicing", "Family Oriented", "Education Focused"]
    },
    {
      id: "2",
      name: "User #4412",
      age: 25,
      location: "Manchester, UK",
      profession: "Doctor",
      compatibility: 88,
      reason: "Complementary personality traits and shared long-term goals.",
      tags: ["Professional", "Community Active", "Kind"]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted/20 p-4 md:p-8">
      <div className="container mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Main Content: Suggestions */}
        <div className="lg:col-span-2 space-y-8">
          {/* Training Progress Card */}
          <Card className="border-none shadow-md bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/10">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t('dashboard.training_title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('dashboard.training_desc')}</p>
                </div>
              </div>
              <Link to="/education">
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  {t('dashboard.continue_learning')} {isRtl ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-primary">{t('dashboard.title')}</h1>
              <p className="text-muted-foreground">{t('dashboard.desc')}</p>
            </div>
            <Badge variant="outline" className="px-3 py-1 border-primary text-primary bg-primary/5">
              <Sparkles className="w-3 h-3 mr-2" />
              AI Optimized
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {suggestions.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary/20" />
                    </div>
                    <div className={`absolute -bottom-6 ${isRtl ? 'right-6' : 'left-6'}`}>
                      <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                          {match.name.split('#')[1]}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'}`}>
                      <Badge className="bg-secondary text-secondary-foreground font-bold">
                        {match.compatibility}% Match
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="pt-10 pb-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-primary">{match.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {match.location}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {match.profession}</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/50 rounded-lg mb-4 border border-muted">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                        <Info className="w-3 h-3" /> AI Insight
                      </p>
                      <p className="text-sm italic">"{match.reason}"</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {match.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] font-medium uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link to={`/profile/${match.id}`} className="flex-1">
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          {t('dashboard.view_profile')}
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/5">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar: AI Assistant */}
        <div className="space-y-8">
          <Card className="border-none shadow-lg h-[calc(100vh-160px)] flex flex-col">
            <CardHeader className="border-b bg-primary/5">
              <CardTitle className="text-lg font-heading font-bold flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                {t('dashboard.ai_assistant')}
              </CardTitle>
              <CardDescription>{t('dashboard.ai_assistant_desc')}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  <div className={`bg-muted p-3 rounded-lg ${isRtl ? 'rounded-tr-none' : 'rounded-tl-none'} max-w-[85%]`}>
                    <p className="text-sm">Assalamu Alaikum. I am your Mithaq Assistant. How can I guide you in your search for a compatible life partner today?</p>
                  </div>
                  
                  <div className={`bg-primary/10 p-3 rounded-lg ${isRtl ? 'rounded-tl-none' : 'rounded-tr-none'} max-w-[85%] ${isRtl ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}>
                    <p className="text-sm">Can you explain why User #8291 is a good match for me?</p>
                  </div>

                  <div className={`bg-muted p-3 rounded-lg ${isRtl ? 'rounded-tr-none' : 'rounded-tl-none'} max-w-[85%]`}>
                    <p className="text-sm">Certainly. Based on your assessment, both of you prioritize "Family Stability" and "Continuous Learning" as core marriage values. Your complementary communication styles—your directness and their calm approach—suggest a balanced partnership.</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>

            <div className="p-4 border-t">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  placeholder="..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon" className="bg-primary hover:bg-primary/90">
                  {isRtl ? <Send className="w-4 h-4 rotate-180" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
