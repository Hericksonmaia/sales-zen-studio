import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      period: "Dia 0–7",
      title: "Preparação Estratégica",
      activities: "Diagnóstico, copy, criativos, páginas e treinamento do script"
    },
    {
      period: "Dia 8–21",
      title: "Captação Ativa",
      activities: "Captação + aquecimento; DMs e ligações diárias"
    },
    {
      period: "Dia 22–30",
      title: "Conversão & Otimização",
      activities: "Foco em agendamentos, show-up e reuniões; otimizações"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Processo passo a passo para os primeiros 30 dias
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {step.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.activities}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
