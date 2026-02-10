import { useState } from "react";
import { Heart } from "lucide-react";

const LoveLetterReveal = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="love-letter" className="px-5 py-20 bg-gradient-to-b from-background to-rose-light">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Levél, Neked
        </h2>
        <p className="text-muted-foreground font-handwritten text-lg mb-10">
          Nyomd meg az olvasáshoz 💌
        </p>

        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="mx-auto w-24 h-24 flex items-center justify-center rounded-full
              bg-primary/10 hover:bg-primary/20 active:scale-95
              transition-all duration-300 animate-pulse-heart min-h-[44px]"
            aria-label="Reveal love letter"
          >
            <Heart className="w-12 h-12 text-primary fill-primary" />
          </button>
        )}

        {revealed && (
          <div className="animate-letter-reveal bg-card border border-primary/15 rounded-2xl p-7 sm:p-10 shadow-xl text-left">
            <p className="font-handwritten text-2xl text-primary mb-4">My Dearest,</p>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>
                From the very first moment I met you, I knew my life was about to change forever. 
                You walked into my world and painted it with colors I never knew existed.
              </p>
              <p>
                Every morning I wake up grateful that you're mine. Your smile is the sunrise I look 
                forward to, your laughter is the melody that fills my days, and your love is the 
                warmth that wraps around my heart.
              </p>
              <p>
                You've taught me what it means to love unconditionally, to be patient, to be kind, 
                and to cherish every single moment. With you, even the ordinary becomes extraordinary.
              </p>
              <p>
                I promise to love you through every season, to hold your hand through every storm, 
                and to celebrate every sunrise by your side. You are my today, my tomorrow, and 
                my forever.
              </p>
              <p>
                Thank you for choosing me. Thank you for being you. Thank you for every 
                beautiful second we've shared.
              </p>
            </div>

            <p className="font-handwritten text-xl text-primary mt-6 text-right">
              Forever yours,<br />
              With all my love 💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetterReveal;
