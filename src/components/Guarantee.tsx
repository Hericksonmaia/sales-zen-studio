import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuaranteeProps {
  onOpenModal: () => void;
}

const Guarantee = ({ onOpenModal }: GuaranteeProps) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border-2 border-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            As lojas que mais crescem hoje não esperam o cliente entrar
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
            Elas criam o próprio fluxo de vendas todos os dias.
          </p>

          <p className="text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Agora é sua vez de fazer o mesmo.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Participe da Sessão Estratégica Gratuita e descubra como implementar o modelo que tem transformado o setor moveleiro no Brasil.
          </p>

          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
          >
            Quero agendar minha Sessão Estratégica →
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Vagas limitadas semanalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
