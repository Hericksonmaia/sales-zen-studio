import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ThankYou = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Acabei de preencher o formulário e gostaria de agendar meu diagnóstico gratuito."
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://calcom.workidigital.tech/embed/embed.js", "init");
    
    const Cal = (window as any).Cal;
    Cal("init", "reuniao-de-marketing-funil-02", {origin:"https://calcom.workidigital.tech"});
    
    Cal.ns["reuniao-de-marketing-funil-02"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {"layout":"month_view"},
      calLink: "workidigitaloficial-gmail.com/reuniao-de-marketing-funil-02",
    });
    
    Cal.ns["reuniao-de-marketing-funil-02"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

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

          {/* Cal.com Calendar Embed */}
          <div 
            className="bg-secondary rounded-xl mb-8 overflow-hidden border border-border"
            style={{ height: "600px" }}
          >
            <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline"></div>
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
