import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, Shield, User, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="text-2xl font-heading font-bold tracking-tight text-primary">ميثاق</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/education" className="hover:text-primary transition-colors">{t('nav.training')}</Link>
          <Link to="/guardian" className="hover:text-primary transition-colors">{t('guardian.dashboard_title')}</Link>
          <Link to="/about" className="hover:text-primary transition-colors">{t('nav.values')}</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">{t('nav.privacy')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </Button>
          <Link to="/auth">
            <Button variant="ghost" size="sm">{t('nav.signIn')}</Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="bg-primary hover:bg-primary/90">{t('nav.join')}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
