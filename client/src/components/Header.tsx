import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Laptop } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-labtek-navy rounded-lg flex items-center justify-center">
              <Laptop className="text-labtek-blue w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-labtek-navy">Labtek</h1>
              <p className="text-xs text-slate-500">Services Informatiques</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-slate-700 hover:text-labtek-navy transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-labtek-navy transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-slate-700 hover:text-labtek-navy transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-labtek-navy transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-600 hover:text-labtek-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-slate-700 hover:text-labtek-navy font-medium text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-700 hover:text-labtek-navy font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-slate-700 hover:text-labtek-navy font-medium text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-labtek-navy font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
