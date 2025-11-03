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
    <section className="py-10 sm:py-14 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-6 sm:mb-9">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2.5 sm:mb-3.5">
            Para Quem é Esta Oferta
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Esta sessão é para donos de loja de móveis com operação ativa que desejam:
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-9 shadow-lg border border-border mb-5 sm:mb-7">
          <div className="space-y-2.5 sm:space-y-3.5 mb-5 sm:mb-7">
            {forWho.map((item, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-foreground text-sm sm:text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-3.5 sm:pt-5 border-t border-border">
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
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px] rounded-xl"
          >
            Quero participar da Sessão Estratégica →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
