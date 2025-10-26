import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";

interface BenefitsProps {
  onOpenModal: () => void;
}

const Benefits = ({ onOpenModal }: BenefitsProps) => {
  const forWho = [
    "Aumentar a demanda qualificada e gerar vendas todos os dias",
    "Parar de depender apenas do fluxo físico da loja",
    "Estruturar um processo digital que traga resultados previsíveis",
    "Entender o que realmente funciona no digital — e aplicar de forma prática"
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Para Quem é Esta Oferta
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Esta sessão é para donos de loja de móveis com operação ativa que desejam:
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-border mb-6 sm:mb-8">
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {forWho.map((item, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-foreground text-sm sm:text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:pt-6 border-t border-border">
            <div className="flex items-start gap-2 sm:gap-3 mb-4">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-0.5 sm:mt-1" />
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                <span className="font-bold text-foreground">Não é para</span> curiosos, iniciantes ou quem busca viral milagroso. É para empresários que querem escala e clareza de crescimento.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
          >
            Quero participar da Sessão Estratégica →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
