import { Star, Zap, BookOpen, Clock } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="hero-bg pt-8 pb-14 md:pt-14 md:pb-20">
    <div className="section-container !py-0">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          <Zap size={14} /> Acesso imediato
        </span>

        <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance mb-4">
          Quebre o ciclo da procrastinação em <span className="text-primary">24 horas</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-6 text-balance">
          Um guia prático para sair da paralisia, cortar distrações e voltar a agir ainda hoje — sem depender de motivação.
        </p>

        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">Mais de 19 mil pessoas impactadas</span>
        </div>

        <img src={ebookMockup} alt="Guia Rápido para Quebrar a Procrastinação em 24 Horas" className="w-56 md:w-72 mb-8" />

        <CtaButton large>QUERO ACESSO IMEDIATO</CtaButton>

        <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><BookOpen size={14} /> Leitura rápida</span>
          <span className="flex items-center gap-1.5"><Zap size={14} /> Aplicação prática</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> Acesso na hora</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
