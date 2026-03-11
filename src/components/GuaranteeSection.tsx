import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-container">
    <div className="card-elevated max-w-lg mx-auto text-center border-2 border-accent/20">
      <ShieldCheck size={40} className="text-accent mx-auto mb-4" />
      <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-3">Seu risco é zero</h2>
      <p className="text-muted-foreground text-sm md:text-base mb-4">
        Teste o conteúdo. Se sentir que não era para você, pode solicitar reembolso dentro do prazo de garantia.
      </p>
      <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
        <ShieldCheck size={16} /> Compra segura
      </span>
    </div>
  </section>
);

export default GuaranteeSection;
