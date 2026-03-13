import { Zap, BookOpen, Clock } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="bg-primary pt-8 pb-14 md:pt-14 md:pb-20">
    <div className="section-container !py-0">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 bg-white/15 text-primary-foreground font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          <Zap size={14} /> Acesso imediato
        </span>

        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground leading-tight text-balance mb-4">
          Quebre o ciclo da procrastinação em <span className="font-black text-primary-foreground">24 horas</span>
        </h1>

        <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mb-4 text-balance">
          Um guia prático para sair da paralisia, cortar distrações e voltar a agir ainda hoje — sem depender de motivação.
        </p>



        <img src={ebookMockup} alt="Guia Rápido para Quebrar a Procrastinação em 24 Horas" className="w-56 md:w-72 mb-8" />

        <CtaButton large>QUERO ACESSO IMEDIATO</CtaButton>

        <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5"><BookOpen size={14} /> Leitura rápida</span>
          <span className="flex items-center gap-1.5"><Zap size={14} /> Aplicação prática</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> Acesso na hora</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
