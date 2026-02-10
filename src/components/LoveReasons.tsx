import { Heart } from "lucide-react";

const reasons = [
  "The way you laugh at my terrible jokes — it makes everything feel lighter.",
  "How you always know exactly what to say when I need to hear it most.",
  "Your passion for the things you love inspires me every single day.",
  "The way your eyes light up when you talk about something you're excited about.",
  "How safe and at home I feel whenever I'm with you.",
  "Your kindness — the way you treat everyone around you with so much warmth.",
  "The little notes and surprises that remind me I'm always on your mind.",
  "Because every day with you feels like the best day of my life.",
];

const LoveReasons = () => {
  return (
    <section id="notes" className="px-5 py-16 bg-gradient-to-b from-background to-rose-light">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
          Reasons Why I Love You
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10 font-handwritten text-lg">
          Let me count the ways… 💕
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-card border border-primary/10 rounded-xl p-5
                shadow-sm hover:shadow-md hover:-translate-y-1
                active:scale-[0.98] transition-all duration-300"
            >
              <Heart className="w-5 h-5 text-primary/50 group-hover:text-primary mb-3 transition-colors" />
              <p className="text-foreground/85 text-[15px] leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveReasons;
