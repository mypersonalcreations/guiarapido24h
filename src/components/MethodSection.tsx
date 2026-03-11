import { Search, Play, ShieldOff, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Identificar o gatilho", desc: "Você entende o que ativa sua procrastinação." },
  { icon: Play, title: "Destravar o início", desc: "Exercício rápido para vencer a dificuldade de começar." },
  { icon: ShieldOff, title: "Cortar a fuga", desc: "Estratégias para não cair nas distrações." },
  { icon: ArrowRight, title: "Entrar em movimento", desc: "Plano simples para retomar o foco." },
];

const MethodSection = () => (
  <section className="surface-alt">
    <div className="section-container">
      <h2 className="section-title">Como o método funciona</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="card-elevated flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-8 text-sm md:text-base italic">
        "Não é sobre virar outra pessoa em um dia. É sobre quebrar o padrão que está te prendendo."
      </p>
    </div>
  </section>
);

export default MethodSection;
