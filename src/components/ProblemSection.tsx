import { AlertCircle } from "lucide-react";

const ProblemSection = () => (
  <section className="section-container">
    <h2 className="section-title">Você se reconhece nisso?</h2>
    <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
      <p>Você pega o celular "só por 5 minutos" e quando percebe já perdeu muito mais tempo do que deveria.</p>
      <p>Você sabe exatamente o que precisa fazer, mas adia.</p>
      <p>Começa o dia com boas intenções, mas termina com aquela sensação de culpa, frustração e atraso.</p>
      <p>E o pior: no fundo você sabe que tem potencial, só não está conseguindo sair desse ciclo.</p>
    </div>
    <div className="card-elevated mt-8 border-l-4 border-l-primary">
      <div className="flex gap-3 items-start">
        <AlertCircle size={22} className="text-primary mt-0.5 shrink-0" />
        <p className="font-semibold text-foreground text-base md:text-lg">
          Se isso acontece com você, o problema não é falta de capacidade. É que sua mente entrou em um padrão de fuga, distração e adiamento.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
