import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, User, Check, X, Eye, Phone, MessageSquare, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

interface Request {
  id: string;
  wardName: string;
  requesterName: string;
  requesterAge: number;
  requesterProfession: string;
  requesterLocation: string;
  compatibilityScore: number;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function GuardianDashboard() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [requests, setRequests] = useState<Request[]>([
    {
      id: "req_1",
      wardName: "Sarah Ahmed",
      requesterName: "Omar Khalid",
      requesterAge: 29,
      requesterProfession: "Civil Engineer",
      requesterLocation: "Riyadh, SA",
      compatibilityScore: 88,
      message: "I am very interested in Sarah's profile. I believe our values align well, especially regarding family and community involvement.",
      status: 'pending'
    },
    {
      id: "req_2",
      wardName: "Sarah Ahmed",
      requesterName: "Faisal Mansour",
      requesterAge: 31,
      requesterProfession: "Financial Analyst",
      requesterLocation: "Jeddah, SA",
      compatibilityScore: 75,
      message: "I am looking for a serious partner and Sarah's profile caught my attention.",
      status: 'pending'
    }
  ]);

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: action } : req));
    toast.success(action === 'approved' ? t('profile.request_approved') : t('profile.request_rejected'));
  };

  const pendingRequests = requests.filter(r => r.status === 'pending');

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary flex items-center gap-3">
              <Shield className="w-8 h-8" />
              {t('guardian.dashboard_title')}
            </h1>
            <p className="text-muted-foreground mt-2">{t('guardian.pending_requests')}</p>
          </div>
          <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/5 text-primary border-primary/20">
            {t('guardian.verified_guardian')}
          </Badge>
        </div>

        <div className="grid gap-8">
          <AnimatePresence mode="popLayout">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request) => (
                <motion.div
                  key={request.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="border-none shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-4">
                      <div className="p-8 bg-primary/5 border-r md:col-span-1 flex flex-col items-center justify-center text-center">
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                            {request.requesterName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-lg">{request.requesterName}</h3>
                        <p className="text-sm text-muted-foreground">{request.requesterAge} {t('guardian.years')}</p>
                        <Badge className="mt-4 bg-secondary text-secondary-foreground">
                          {request.compatibilityScore}% {t('dashboard.compatibility')}
                        </Badge>
                      </div>
                      
                      <div className="p-8 md:col-span-3 space-y-6">
                        <div className="flex flex-wrap justify-between items-start gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t('guardian.ward_profile')}</h4>
                            <p className="text-xl font-bold text-primary">{request.wardName}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                              <Eye className="w-4 h-4" /> {t('guardian.view_requester')}
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                              <Phone className="w-4 h-4" /> {t('guardian.contact')}
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 py-6 border-y">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">{t('guardian.profession')}</p>
                            <p className="font-medium">{request.requesterProfession}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">{t('guardian.location')}</p>
                            <p className="font-medium">{request.requesterLocation}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> {t('guardian.message_from')}
                          </h4>
                          <p className="text-muted-foreground italic leading-relaxed bg-muted/30 p-4 rounded-lg">
                            "{request.message}"
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button 
                            onClick={() => handleAction(request.id, 'approved')}
                            className="flex-1 h-12 bg-primary hover:bg-primary/90 gap-2"
                          >
                            <Check className="w-5 h-5" /> {t('guardian.approve')}
                          </Button>
                          <Button 
                            onClick={() => handleAction(request.id, 'rejected')}
                            variant="outline" 
                            className="flex-1 h-12 border-destructive text-destructive hover:bg-destructive/5 gap-2"
                          >
                            <X className="w-5 h-5" /> {t('guardian.reject')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground">{t('guardian.no_requests')}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
