'use client';

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  displayValue: string;
  subtitle: string;
  suffix?: string;
}

const initialStats: Stat[] = [
  {
    value: 3.414,
    displayValue: "+0 cidades",
    subtitle: "Abrangência Nacional",
    suffix: " cidades",
  },
  {
    value: 53.3,
    displayValue: "+0 mil",
    subtitle: "De clientes",
    suffix: " mil",
  },
];

export default function StatsCard() {
  const [stats, setStats] = useState<Stat[]>(initialStats);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateStat = (
    index: number,
    endValue: number,
    suffix: string
  ) => {
    const duration = 1000; // ms
    const frameRate = 30; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;
    const startValue = 0;
    const increment = (endValue - startValue) / totalFrames;

    const animate = () => {
      frame++;
      let currentValue = startValue + increment * frame;
      if (currentValue > endValue) currentValue = endValue;

      let formatted;
      if (suffix.includes("cidades")) {
        formatted = currentValue.toFixed(3);
      } else {
        formatted = currentValue.toFixed(1);
      }

      setStats((prevStats) => {
        const newStats = [...prevStats];
        newStats[index] = {
          ...newStats[index],
          displayValue: `+${formatted} ${suffix}`.trim(),
        };
        return newStats;
      });

      if (frame < totalFrames) {
        setTimeout(animate, 1000 / frameRate);
      } else {
         setStats((prevStats) => {
            const newStats = [...prevStats];
            let finalFormatted = suffix.includes('cidades')
              ? endValue.toFixed(3)
              : endValue.toFixed(1);
            newStats[index] = {
                ...newStats[index],
                displayValue: `+${finalFormatted} ${suffix}`.trim()
            };
            return newStats;
        });
      }
    };
    animate();
  };


  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && statsRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                initialStats.forEach((stat, i) => {
                    animateStat(i, stat.value, stat.suffix || "");
                });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(statsRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [hasAnimated]);

  return (
  <div className="bg-secondary w-[100%] py-10 px-5 md:px-[30px] flex justify-center">
  <div ref={statsRef} className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-center bg-[#004166] rounded-[30px] p-5 md:p-[30px]  w-3/5 max-w-[1200px] gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center my-[15px] mx-0">
          <h1 className="text-[35px] md:text-[40px] leading-[50px] font-bold text-[#4cd8fb] m-0">
            {stat.displayValue}
          </h1>
          <p className="text-white text-center w-[70%] pb-0">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}
