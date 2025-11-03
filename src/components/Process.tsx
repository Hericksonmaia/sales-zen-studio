import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico Rápido",
      description: "Você preenche um formulário com informações sobre sua loja, faturamento e desafios atuais"
    },
    {
      number: "2",
      title: "Contato Direto",
      description: "Nossa equipe entra em contato para agendar sua Sessão Estratégica 100% online e gratuita"
    },
    {
      number: "3",
      title: "Análise e Direcionamento",
      description: "Durante a sessão, vamos identificar os gargalos, os erros que te impedem de crescer e apontar o plano de ação que pode multiplicar seus resultados no digital"
    }
  ];

  return (
    <section className="py-10 sm:py-14 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2.5 sm:mb-3.5">
            Como Funciona Sua Sessão Estratégica
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Em apenas três etapas simples, você entenderá com clareza o que está travando o crescimento da sua loja e como destravar isso imediatamente
          </p>
        </div>

        <div className="space-y-3 sm:space-y-5">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="flex-shrink-0 hidden md:block">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
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
