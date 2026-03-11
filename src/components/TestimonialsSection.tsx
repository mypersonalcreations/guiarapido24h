import { Star } from "lucide-react";

const testimonials = [
  { name: "Ana C.", text: "Eu achava que era preguiça, mas o guia me mostrou que era um padrão. Em um dia já consegui sair da inércia.", rating: 5 },
  { name: "Lucas M.", text: "Simples, direto e funciona. Apliquei na hora e já senti diferença no mesmo dia.", rating: 5 },
  { name: "Mariana S.", text: "Finalmente algo prático! Não é aquele conteúdo motivacional vazio. Me ajudou de verdade.", rating: 5 },
  { name: "Rafael T.", text: "Comprei sem muita expectativa e me surpreendi. O método dos blocos de foco mudou minha rotina.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-container">
    <h2 className="section-title">O que as pessoas estão dizendo</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {testimonials.map((t, i) => (
        <div key={i} className="card-elevated">
          <div className="flex gap-0.5 mb-2">
            {[...Array(t.rating)].map((_, j) => (
              <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-3 italic">"{t.text}"</p>
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
