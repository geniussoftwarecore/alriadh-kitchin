import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoUrl from "@assets/haron's_logo_1768070581366.png";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "اتصل بنا" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src={logoUrl} 
            alt="Riyadh Kitchens Factory" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-lg font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-foreground md:text-white md:drop-shadow-sm"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            اطلب عرض سعر
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:0501755938" className={`p-2 rounded-full ${isScrolled ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white'}`}>
            <Phone className="w-5 h-5" />
          </a>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]" dir="rtl">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex justify-center mb-4">
                  <img src={logoUrl} alt="Logo" className="h-16 w-auto" />
                </div>
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        scrollToSection(e, link.href);
                        // Using a small delay to allow sheet to close if necessary
                        setTimeout(() => {
                           const sheetClose = document.querySelector('[data-radix-collection-item]');
                           if (sheetClose instanceof HTMLElement) sheetClose.click();
                        }, 100);
                      }}
                      className="text-xl font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6 rounded-xl"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  اطلب عرض سعر
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
