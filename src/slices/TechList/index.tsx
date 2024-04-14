"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import { DiReact, DiPython, DiMysql, DiJava } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";
import Bounded from "@/components/Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TechListProps = SliceComponentProps<Content.TechListSlice>;

const TechList = ({ slice }: TechListProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom ",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-r",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const techIcons = {
    React: <DiReact />,
    Python: <DiPython />,
    MySql: <DiMysql />,
    Java: <DiJava />,
    Supabase: <RiSupabaseFill />,
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="lg" as="h2">
          {slice.primary.heading}
        </Heading>
      </Bounded>
      {slice.items.map(({ tech_color, tech_name }, index) => {
        return (
          <div
            key={index}
            className="tech-r mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ""}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className={
                    "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  }
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-3xl">
                  {techIcons[tech_name as keyof typeof techIcons]}
                </span>
              </React.Fragment>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default TechList;
