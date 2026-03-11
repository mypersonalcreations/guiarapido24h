import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Funciona para quem procrastina muito?", a: "Sim! O guia foi feito justamente para quem está preso nesse ciclo há tempo. Quanto mais você procrastina, mais precisa de um método estruturado como este." },
  { q: "É muito teórico?", a: "Não. O guia é 100% prático e direto ao ponto. Sem enrolação, sem teoria complexa. Você aplica no mesmo dia." },
  { q: "Serve para estudos ou trabalho?", a: "Sim, serve para qualquer área. O método funciona para tarefas do dia a dia, estudos, trabalho, projetos pessoais." },
  { q: "Quando recebo o acesso?", a: "Imediatamente após a confirmação do pagamento. Você recebe o link de acesso no seu e-mail." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="surface-alt">
      <div className="section-container">
        <h2 className="section-title">Perguntas frequentes</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-elevated cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-foreground text-sm md:text-base">{f.q}</h3>
                <ChevronDown size={18} className={`text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="text-muted-foreground text-sm mt-3">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
