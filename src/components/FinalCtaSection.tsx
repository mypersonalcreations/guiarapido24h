import CtaButton from "./CtaButton";

const FinalCtaSection = () => (
  <section className="hero-bg">
    <div className="section-container text-center">
      <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3 text-balance">
        Pare de adiar a vida que você quer construir
      </h2>
      <p className="text-muted-foreground mb-4">Tenha acesso imediato ao guia.</p>
      <p className="text-3xl md:text-4xl font-black text-accent mb-6">R$21,90</p>
      <CtaButton large>SIM, QUERO ACESSO IMEDIATO</CtaButton>
    </div>
  </section>
);

export default FinalCtaSection;
