import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface FloatingCTAProps {
  onOpenModal: () => void;
}

const FloatingCTA = ({ onOpenModal }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 80vh (after hero section)
      const scrollPosition = window.scrollY;
      const showAfter = window.innerHeight * 0.8;
      
      setIsVisible(scrollPosition > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-2xl">
        <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground">
                Pronto para aumentar suas vendas?
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Vagas limitadas • 100% gratuito
              </p>
            </div>
            
            <Button 
              onClick={onOpenModal}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden xs:inline">Agendar Sessão Estratégica</span>
              <span className="xs:hidden">Agendar Agora</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
