import { Check } from "lucide-react";

const items = [
  "Guia principal: Plano 24h passo a passo",
  "Ritual de início em 5 minutos",
  "Método de blocos de foco",
  "Script anti-fuga",
  'Checklist "Hoje eu faço"',
  "Acesso imediato",
];

const WhatYouGetSection = () => (
  <section className="section-container">
    <h2 className="section-title">O que você vai receber</h2>
    <div className="card-elevated max-w-lg mx-auto">
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={14} className="text-accent" />
            </div>
            <span className="text-foreground font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatYouGetSection;
