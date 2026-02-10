const NavRibbon = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/10 border-b border-primary/20">
      <div className="flex items-center justify-center gap-2 px-4 py-3 max-w-lg mx-auto">
        {[
          { label: "Kártyák", id: "notes" },
          { label: "Emlékek", id: "memories" },
          { label: "Levél", id: "love-letter" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium tracking-wide
              text-primary hover:bg-primary/15 active:bg-primary/25
              transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavRibbon;
