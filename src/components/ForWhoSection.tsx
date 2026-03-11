import { Check } from "lucide-react";

const items = [
  "Adia tarefas importantes",
  "Se distrai com celular",
  "Começa coisas e não termina",
  "Quer voltar a agir",
];

const ForWhoSection = () => (
  <section className="section-container">
    <h2 className="section-title">Este guia é para você se...</h2>
    <div className="card-elevated max-w-lg mx-auto border-l-4 border-l-accent">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <Check size={18} className="text-accent shrink-0" />
            <span className="text-foreground font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ForWhoSection;
