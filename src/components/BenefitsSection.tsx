import { CircleCheck } from "lucide-react";

const benefits = [
  "Parar de perder horas em distrações",
  "Começar tarefas com menos resistência",
  "Sair do modo automático",
  'Diminuir a culpa de "não fiz nada"',
  "Recuperar clareza mental",
  "Criar sensação de progresso",
  "Voltar a confiar em si mesmo",
];

const BenefitsSection = () => (
  <section className="surface-alt">
    <div className="section-container">
      <h2 className="section-title">O que pode mudar quando você aplica esse guia</h2>
      <div className="max-w-lg mx-auto space-y-3">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
            <CircleCheck size={20} className="text-accent shrink-0" />
            <span className="text-foreground font-medium text-sm md:text-base">{b}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
