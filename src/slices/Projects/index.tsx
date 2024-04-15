import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h1" size="xl" className="col-start-1 mb-8">
        {slice.primary.heading}
      </Heading>
      <div className="grid grid-cols-2 gap-8">
        {slice.items.map((item, index) => (
          <div key={index} className="grid gap-4">
            <Heading
              as="h2"
              size="md"
              className="text-xl font-bold text-center"
            >
              {item.project_name}
            </Heading>
            <PrismicNextImage field={item.project_image}></PrismicNextImage>
            <p className="text-center text-bold px-2">{item.project_details}</p>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
