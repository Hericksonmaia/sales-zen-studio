import { Target, Megaphone, PhoneCall } from "lucide-react";

const Mechanism = () => {
  const features = [
    {
      icon: Target,
      title: "Posicionamento Estratégico",
      description: "Transformamos sua marca em referência na região, destacando diferenciais que vendem"
    },
    {
      icon: Megaphone,
      title: "Tráfego Pago Direcionado",
      description: "Campanhas otimizadas que trazem clientes prontos para comprar, todos os dias"
    },
    {
      icon: PhoneCall,
      title: "Rotina Comercial Digital",
      description: "Atendimento simples e eficaz via WhatsApp/DM, garantindo follow-up e fechamento"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Por Que Funciona
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            O sistema foi criado a partir da experiência com dezenas de lojas de móveis de todo o Brasil e é baseado em três pilares fundamentais que criam previsibilidade real — e não apenas picos de venda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-5 sm:p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
