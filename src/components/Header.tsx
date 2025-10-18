import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-foreground text-lg">MóveisPro</span>
        </div>
        
        <Button 
          onClick={onOpenModal}
          size="lg"
          className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg transition-all duration-300"
        >
          Agendar Diagnóstico
        </Button>
      </div>
    </header>
  );
};

export default Header;
