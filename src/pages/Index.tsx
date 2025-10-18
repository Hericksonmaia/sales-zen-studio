import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mechanism from "@/components/Mechanism";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Guarantee from "@/components/Guarantee";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Exit-intent detection (desktop only)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && window.innerWidth >= 768) {
        setModalOpen(true);
        // Track exit-intent event
        console.log("Exit intent triggered");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen">
      <Header onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Mechanism />
        <Benefits onOpenModal={() => setModalOpen(true)} />
        <Process />
        <Guarantee onOpenModal={() => setModalOpen(true)} />
      </main>
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
