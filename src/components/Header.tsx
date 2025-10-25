import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Zoe Li</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Marketer
            </button>
            <button 
              onClick={() => scrollToSection("ai")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              AI Prototyper
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Marketer
            </button>
            <button 
              onClick={() => scrollToSection("ai")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              AI Prototyper
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Contact Me
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
