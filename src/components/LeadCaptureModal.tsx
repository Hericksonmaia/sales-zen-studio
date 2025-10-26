import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { trackLead } from "@/lib/facebook-pixel";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal = ({
  open,
  onOpenChange
}: LeadCaptureModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    revenue: [] as string[],
    role: ""
  });
  const navigate = useNavigate();

  const revenueOptions = [
    "até 30 mil mensais",
    "R$ 30 mil a R$ 40 mil mensais",
    "R$ 40 mil a R$ 50 mil mensais",
    "R$ 50 mil a R$ 80 mil mensais",
    "R$ 100 mil a R$ 200 mil mensais",
    "R$ 200 mil a R$ 400 mil mensais",
    "mais de R$ 600 mil mensais"
  ];

  const roleOptions = [
    "Proprietário(a)",
    "Sócio(a)",
    "Gestor(a) Comercial",
    "Marketing",
    "Vendedor(a)/Consultor(a)",
    "Outro"
  ];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.instagram) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }
    
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.revenue.length === 0 || !formData.role) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Track Facebook conversion
    await trackLead({
      name: formData.name,
      email: formData.email,
      instagram: formData.instagram,
      revenue: formData.revenue,
      role: formData.role
    });

    console.log("Lead submitted:", formData);
    toast.success("Cadastro realizado com sucesso!");
    onOpenChange(false);
    navigate("/obrigado");
  };

  const toggleRevenue = (value: string) => {
    setFormData(prev => ({
      ...prev,
      revenue: prev.revenue.includes(value)
        ? prev.revenue.filter(r => r !== value)
        : [...prev.revenue, value]
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center">
            {step === 1 ? "Vamos começar!" : "Última etapa"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <form onSubmit={handleStep1Submit} className="space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                className="text-base h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="text-base h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-base">Instagram</Label>
              <Input
                id="instagram"
                placeholder="@sualoja"
                value={formData.instagram}
                onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                required
                className="text-base h-12"
              />
              <p className="text-xs text-muted-foreground">
                Usamos seu @ para analisar rápido seu posicionamento.
              </p>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover min-h-[48px] text-base font-semibold">
              Continuar →
            </Button>
          </form>
        ) : (
          <form onSubmit={handleStep2Submit} className="space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <Label className="text-base">Faturamento mensal atual</Label>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {revenueOptions.map(option => (
                  <div key={option} className="flex items-center space-x-3 min-h-[44px]">
                    <Checkbox
                      id={option}
                      checked={formData.revenue.includes(option)}
                      onCheckedChange={() => toggleRevenue(option)}
                      className="w-5 h-5"
                    />
                    <label
                      htmlFor={option}
                      className="text-sm sm:text-base font-medium leading-snug cursor-pointer flex-1"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Marque mais de uma se tiver múltiplas unidades.
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">Cargo</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={value => setFormData({ ...formData, role: value })}
              >
                {roleOptions.map(option => (
                  <div key={option} className="flex items-center space-x-3 min-h-[44px]">
                    <RadioGroupItem value={option} id={option} className="w-5 h-5" />
                    <Label htmlFor={option} className="cursor-pointer font-normal text-sm sm:text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Em média, 12–24 reuniões/mês no 1º ciclo.</span>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Ao continuar, você concorda com nossa{" "}
                <a href="#" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover font-bold min-h-[48px] text-base">
              Quero minha sessão estratégica
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
