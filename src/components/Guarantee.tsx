import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuaranteeProps {
  onOpenModal: () => void;
}

const Guarantee = ({ onOpenModal }: GuaranteeProps) => {
  return (
    <section className="py-10 sm:py-14 px-4 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border-2 border-primary rounded-2xl p-5 sm:p-7 md:p-9 text-center shadow-xl">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3.5 sm:mb-5">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3.5 sm:mb-5">
            As lojas que mais crescem hoje não esperam o cliente entrar
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2.5 sm:mb-3.5 max-w-2xl mx-auto leading-relaxed">
            Elas criam o próprio fluxo de vendas todos os dias.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-5 sm:mb-7 max-w-2xl mx-auto">
            Agora é sua vez de fazer o mesmo.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-7 max-w-2xl mx-auto leading-relaxed">
            Participe da Sessão Estratégica Gratuita e descubra como implementar o modelo que tem transformado o setor moveleiro no Brasil.
          </p>

          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px] rounded-xl"
          >
            Quero agendar minha Sessão Estratégica →
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3.5">
            Vagas limitadas semanalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
