import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuaranteeProps {
  onOpenModal: () => void;
}

const Guarantee = ({ onOpenModal }: GuaranteeProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            As lojas que mais crescem hoje não esperam o cliente entrar
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Elas criam o próprio fluxo de vendas todos os dias.
          </p>

          <p className="text-xl font-semibold text-foreground mb-8 max-w-2xl mx-auto">
            Agora é sua vez de fazer o mesmo.
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Participe da Sessão Estratégica Gratuita e descubra como implementar o modelo que tem transformado o setor moveleiro no Brasil.
          </p>

          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Quero agendar minha Sessão Estratégica →
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Vagas limitadas semanalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
