import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols[2fr, 1fr]">
        <Heading as="h2" size="lg" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <div className="grid grid-cols-2 gap-8">
          {slice.items.map((item, index) => (
            <div key={index} className="grid gap-4">
              <Heading as="h2" size="md">
                {item.school}
              </Heading>
              <Heading as="h3" size="sm">
                {item.type_of_degree}
              </Heading>
              <p>{item.school_description}</p>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Education;
