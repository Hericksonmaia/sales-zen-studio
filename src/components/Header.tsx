import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-base sm:text-lg">M</span>
          </div>
          <span className="font-bold text-foreground text-base sm:text-lg">MóveisPro</span>
        </div>
        
        <Button 
          onClick={onOpenModal}
          size="default"
          className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base px-3 sm:px-4 h-9 sm:h-10 rounded-lg"
        >
          Agendar Diagnóstico
        </Button>
      </div>
    </header>
  );
};

export default Header;
