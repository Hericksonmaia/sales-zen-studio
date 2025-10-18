import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Acabei de preencher o formulário e gostaria de agendar meu diagnóstico gratuito."
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-scale-in">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 Último passo: escolha seu horário agora
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Seu cadastro foi realizado com sucesso! Agora vamos agendar sua reunião estratégica.
          </p>

          {/* Calendar Embed Placeholder */}
          <div className="bg-secondary rounded-xl p-8 mb-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Calendário Calendly/Google Calendar
              </p>
              <p className="text-sm text-muted-foreground">
                Integre aqui seu link do Calendly ou Google Calendar
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Prefere agendar pelo WhatsApp?
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Confirmation Message */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              📱 Enviamos o <span className="font-bold">Roteiro Pré-Reunião</span> no seu WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
