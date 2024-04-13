import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import React from "react";
import { MdDeveloperMode } from "react-icons/md";

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg" as="h2">
        {slice.primary.heading}
      </Heading>
      {slice.items.map(({ tech_color, tech_name }, index) => {
        return (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          >
            {tech_name} - {tech_color}
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-3xl">
                  <MdMosque />
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
