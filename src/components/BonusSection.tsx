import { Gift } from "lucide-react";

const bonuses = [
  { title: "Desbloqueio 5 minutos", desc: "Técnica rápida para sair da inércia e começar qualquer tarefa." },
  { title: "Script anti-fuga", desc: "Roteiro mental para quando bater a vontade de fugir para o celular." },
  { title: "Blocos de foco (20/5 ou 25/5)", desc: "Método prático de intervalos para manter concentração." },
];

const BonusSection = () => (
  <section className="surface-alt">
    <div className="section-container">
      <h2 className="section-title">Receba 3 bônus incríveis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {bonuses.map((b, i) => (
          <div key={i} className="card-elevated text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Gift size={22} className="text-accent" />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-sm">{b.title}</h3>
            <p className="text-muted-foreground text-xs mb-3">{b.desc}</p>
            <p className="text-muted-foreground text-xs line-through">R$24,90</p>
            <p className="text-accent font-extrabold text-lg">GRÁTIS</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
