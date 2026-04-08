import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, Shield, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="text-2xl font-heading font-bold tracking-tight text-primary">Mithaq</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/about" className="hover:text-primary transition-colors">Our Values</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/auth">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="bg-primary hover:bg-primary/90">Join Mithaq</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
