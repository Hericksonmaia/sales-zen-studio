import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Globe, MessageSquare, BarChart3, Video } from "lucide-react";

interface BenefitsProps {
  onOpenModal: () => void;
}

const Benefits = ({ onOpenModal }: BenefitsProps) => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Roteiro de implantação",
      description: "30 dias com metas semanais"
    },
    {
      icon: Palette,
      title: "Templates de criativos",
      description: "Vídeos, estáticos e copies prontos"
    },
    {
      icon: Globe,
      title: "Landing de agendamento",
      description: "Páginas otimizadas + DMs"
    },
    {
      icon: MessageSquare,
      title: "Scripts comerciais",
      description: "Pré-qualificação, agendamento e follow-up"
    },
    {
      icon: BarChart3,
      title: "Planilha/CRM de leads",
      description: "Rotina diária de 15–30 min"
    },
    {
      icon: Video,
      title: "1 call por semana",
      description: "Ajustes e leitura de métricas"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Você Recebe
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que você precisa para começar a gerar reuniões qualificadas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ver se minha loja é elegível →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
