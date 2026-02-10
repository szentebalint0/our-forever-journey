import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import placeholder photos — replace these with your own!
import photo1 from "@/assets/photos/photo1.jpg";
import photo2 from "@/assets/photos/photo2.jpg";
import photo3 from "@/assets/photos/photo3.jpg";
import photo4 from "@/assets/photos/photo4.jpg";
import photo5 from "@/assets/photos/photo5.jpg";

const photos = [
  { src: photo1, caption: "Our first adventure together" },
  { src: photo2, caption: "That magical sunset we shared" },
  { src: photo3, caption: "Laughing until our cheeks hurt" },
  { src: photo4, caption: "The place where it all began" },
  { src: photo5, caption: "Just us, being us" },
];

const PhotoSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <section id="memories" className="px-5 py-16 bg-gradient-to-b from-rose-light to-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
          Our Memories
        </h2>
        <p className="text-center text-muted-foreground font-handwritten text-lg mb-8">
          Moments I'll cherish forever ✨
        </p>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="aspect-[4/5] sm:aspect-video relative">
            <img
              src={photos[current].src}
              alt={photos[current].caption}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
              <p className="text-white font-handwritten text-lg">
                {photos[current].caption}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
              bg-white/80 backdrop-blur-sm flex items-center justify-center
              text-foreground shadow-md active:scale-95 transition-transform"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
              bg-white/80 backdrop-blur-sm flex items-center justify-center
              text-foreground shadow-md active:scale-95 transition-transform"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                i === current ? "" : ""
              }`}
              aria-label={`Go to photo ${i + 1}`}
            >
              <span
                className={`block w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-primary/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
