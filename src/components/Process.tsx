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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona Sua Sessão Estratégica
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Em apenas três etapas simples, você entenderá com clareza o que está travando o crescimento da sua loja e como destravar isso imediatamente
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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
