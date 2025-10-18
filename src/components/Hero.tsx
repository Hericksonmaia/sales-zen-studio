import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, TrendingUp } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Exclusivo para donos de lojas de móveis com operação ativa
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tenha o mesmo modelo de vendas digital usado pelas lojas de móveis que mais crescem no Brasil
          </h1>

          {/* H2 */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Conheça a estratégia que combina posicionamento, tráfego pago e rotina comercial, trazendo mais faturamento com menos esforço — mesmo que você nunca tenha estruturado um funil antes.
          </p>

          {/* CTA */}
          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Diagnóstico Gratuito
          </Button>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground mb-8">
            Dura 20–30 min • 100% online • Sem compromisso
          </p>

          {/* Proof Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-border max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Agenda cheia em 4 semanas</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Show-up médio 70–85%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
