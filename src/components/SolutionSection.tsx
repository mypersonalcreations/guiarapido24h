import CtaButton from "./CtaButton";

const SolutionSection = () => (
  <section className="section-container">
    <h2 className="section-title">Foi para isso que este guia foi criado.</h2>
    <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
      <p>
        O <strong className="text-foreground">Guia Rápido para Quebrar a Procrastinação em 24 Horas</strong> foi feito para te ajudar a interromper esse ciclo de forma simples, prática e aplicável.
      </p>
      <div className="flex flex-col items-center gap-1 font-medium text-foreground">
        <span>Sem teoria enrolada.</span>
        <span>Sem rotina impossível.</span>
        <span>Sem depender de estar inspirado.</span>
      </div>
      <p>
        Você vai entender o que te trava, como sair da inércia e como voltar a agir com clareza ainda hoje.
      </p>
      <p className="italic text-sm">
        Mesmo que você já tenha tentado antes e não conseguiu manter constância.
      </p>
    </div>
    <div className="flex justify-center mt-8">
      <CtaButton>QUERO ACESSO IMEDIATO</CtaButton>
    </div>
  </section>
);

export default SolutionSection;
