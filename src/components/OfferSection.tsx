import CtaButton from "./CtaButton";

const OfferSection = () => (
  <section className="surface-alt">
    <div className="section-container">
      <div className="card-elevated max-w-lg mx-auto text-center border-2 border-primary/20">
        <span className="inline-block bg-primary text-primary-foreground font-bold text-xs px-3 py-1 rounded-full mb-4">78% OFF</span>
        <p className="text-muted-foreground line-through text-lg">De R$99,60</p>
        <p className="text-4xl md:text-5xl font-black text-accent my-2">R$21,90</p>
        <p className="text-muted-foreground text-sm mb-6">Pagamento único · Acesso imediato</p>
        <CtaButton large>QUERO COMEÇAR HOJE</CtaButton>
      </div>
    </div>
  </section>
);

export default OfferSection;
