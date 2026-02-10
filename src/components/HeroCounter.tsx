import { useEffect, useState } from "react";

const START_DATE = new Date("2023-02-11T00:00:00");

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getElapsed(): TimeElapsed {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();

  if (days < 0) {
    months--;
    const prev = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    days,
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

const HeroCounter = () => {
  const [elapsed, setElapsed] = useState<TimeElapsed>(getElapsed());

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: elapsed.years, label: "év" },
    { value: elapsed.months, label: "hónap" },
    { value: elapsed.days, label: "map" },
    { value: elapsed.hours, label: "óra" },
    { value: elapsed.minutes, label: "perc" },
    { value: elapsed.seconds, label: "másodperc" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12
      bg-gradient-to-b from-rose-light via-card to-background overflow-hidden">
      <div className="relative z-10 text-center max-w-sm mx-auto">
        <p className="text-primary/70 text-sm tracking-[0.2em] uppercase mb-3">
          2023.02.11, utazásunk kezdete
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground italic leading-tight mb-8">
          Amióta igent mondtál
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-primary/15 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary font-handwritten">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl font-handwritten text-primary/80">
          …minden másodperc megérte 💕
        </p>
      </div>
    </section>
  );
};

export default HeroCounter;
