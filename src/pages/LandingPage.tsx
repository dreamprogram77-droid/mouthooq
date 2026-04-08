import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
                Marriage with Purpose & Privacy
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-primary">
                A Sacred Bond, <br />
                <span className="italic text-secondary">Intelligently Matched.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                Mithaq is a structured matchmaking platform designed for those seeking serious marriage partners through a respectful, secure, and values-aligned process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="px-8 h-14 text-lg bg-primary hover:bg-primary/90">
                    Start Your Journey
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 h-14 text-lg border-primary text-primary hover:bg-primary/5">
                  Learn Our Process
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />
          <img 
            src="https://picsum.photos/seed/marriage/1200/1600" 
            alt="Marriage Concept" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Built on Trust and Privacy</h2>
            <p className="text-muted-foreground">We prioritize your values and security at every step of the matchmaking process.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-primary" />,
                title: "Privacy First",
                description: "Your photos and sensitive data remain hidden until you approve a serious request."
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Guardian Integration",
                description: "Optional Wali (Guardian) involvement to ensure a respectful and transparent process."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-primary" />,
                title: "AI Compatibility",
                description: "Advanced algorithms analyze values, personality, and readiness for long-term success."
              }
            ].map((pillar, i) => (
              <Card key={i} className="border-none shadow-sm bg-background">
                <CardContent className="pt-8 text-center">
                  <div className="mb-6 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8">The Mithaq Process</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Detailed Onboarding", desc: "Create a profile that reflects your true values, lifestyle, and marriage expectations." },
                  { step: "02", title: "Structured Assessment", desc: "Complete our personality and readiness tests to build your compatibility profile." },
                  { step: "03", title: "Smart Matching", desc: "Our AI suggests partners who align with your core values and life goals." },
                  { step: "04", title: "Controlled Interaction", desc: "Unlock communication only after mutual interest and guardian approval." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-heading font-bold text-secondary/40">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/trust/800/800" 
                  alt="Trust and Connection" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl max-w-xs">
                <Lock className="w-8 h-8 mb-4" />
                <p className="font-medium italic">"Your journey is sacred. We protect it with the highest standards of privacy and respect."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 italic">Ready to find your life partner?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join a community of individuals committed to building strong, values-based marriages.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="px-12 h-16 text-xl">
              Create Your Profile
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="text-xl font-heading font-bold text-primary">Mithaq</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/contact">Contact Support</Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Mithaq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
