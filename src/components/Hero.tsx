import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, TrendingUp } from "lucide-react";
interface HeroProps {
  onOpenModal: () => void;
}
const Hero = ({
  onOpenModal
}: HeroProps) => {
  return <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in-up">
          {/* H1 */}
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-5 leading-tight font-bold text-sm">
            Aumente o faturamento da sua loja de móveis em até 3x no digital com a metodologia usada pelas maiores empresas do Brasil
          </h1>

          {/* H2 */}
          <p className="sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-7 max-w-3xl mx-auto leading-relaxed text-xs">
            Descubra como aplicar o mesmo modelo de vendas que une posicionamento, tráfego pago e rotina comercial, criando previsibilidade de faturamento — sem depender apenas do balcão físico ou de indicações.
          </p>

          {/* CTA */}
          <Button onClick={onOpenModal} size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-2.5 sm:mb-3 w-full sm:w-auto min-h-[48px] text-xs font-bold rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            Quero participar da Sessão Estratégica →
          </Button>

          {/* Microcopy */}
          <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">
            100% online • Gratuita • Vagas limitadas semanalmente
          </p>

          {/* Proof Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-3 sm:pt-5 border-t border-border max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">Resultados previsíveis</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">Metodologia comprovada</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;