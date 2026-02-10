import FloatingHearts from "@/components/FloatingHearts";
import NavRibbon from "@/components/NavRibbon";
import HeroCounter from "@/components/HeroCounter";
import LoveReasons from "@/components/LoveReasons";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import LoveLetterReveal from "@/components/LoveLetterReveal";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <NavRibbon />
      <HeroCounter />
      <LoveReasons />
      <PhotoSlideshow />
      <LoveLetterReveal />

      <footer className="py-8 text-center bg-rose-light">
        <p className="font-handwritten text-xl text-primary/70">
          Made with 💕 just for you
        </p>
      </footer>
    </div>
  );
};

export default Index;
