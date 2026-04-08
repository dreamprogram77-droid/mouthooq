import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, MapPin, Briefcase, GraduationCap, Heart, Lock, UserCheck, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

export default function ProfilePage() {
  const { id } = useParams();
  
  // Mock data for the profile
  const profile = {
    name: "User #8291",
    age: 27,
    location: "London, UK",
    education: "MSc Computer Science",
    profession: "Software Engineer",
    bio: "I am a practicing Muslim looking for a partner who values family, growth, and community service. I enjoy traveling, reading, and exploring new technologies.",
    lifestyle: {
      prayer: "Always (5 times daily)",
      diet: "Halal only",
      smoking: "Non-smoker"
    },
    compatibility: 94,
    aiAnalysis: "Your shared focus on professional growth and religious commitment makes this a highly stable match. Both of you expressed a desire for a partner who is 'intellectually curious' and 'family-oriented'."
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted/20 pb-12">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link to="/dashboard" className="inline-flex items-center text-sm mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-primary-foreground/20 shadow-2xl">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-3xl font-bold">
                8291
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-4xl font-heading font-bold">{profile.name}</h1>
                <Badge className="bg-secondary text-secondary-foreground font-bold">
                  {profile.compatibility}% Compatibility
                </Badge>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 opacity-90">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {profile.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {profile.profession}</span>
                <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> {profile.education}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-primary">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "{profile.bio}"
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-6 border-t">
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" /> Lifestyle
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Prayer</span>
                        <span className="font-medium">{profile.lifestyle.prayer}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Diet</span>
                        <span className="font-medium">{profile.lifestyle.diet}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Smoking</span>
                        <span className="font-medium">{profile.lifestyle.smoking}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" /> Privacy & Security
                    </h4>
                    <div className="p-4 bg-muted rounded-lg text-xs space-y-2">
                      <p className="flex items-center gap-2"><Lock className="w-3 h-3" /> Full name is hidden until approval.</p>
                      <p className="flex items-center gap-2"><Lock className="w-3 h-3" /> Photos are blurred for privacy.</p>
                      <p className="flex items-center gap-2"><Lock className="w-3 h-3" /> Communication is moderated.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary/5 border border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <UserCheck className="w-6 h-6" />
                  AI Compatibility Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed italic text-primary/80">
                  {profile.aiAnalysis}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Actions */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg sticky top-24">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-heading font-bold">Interested in {profile.name}?</CardTitle>
                <CardDescription>Initiate a respectful interaction request.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                  <p>Your request will be sent to their Guardian (Wali) for initial review. This ensures a safe and respectful process for everyone.</p>
                </div>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                  Send Request to Guardian
                </Button>
                <Button variant="outline" className="w-full h-12 border-primary text-primary hover:bg-primary/5">
                  Save for Later
                </Button>
              </CardContent>
              <div className="p-6 border-t text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Secure & Values-Aligned
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
