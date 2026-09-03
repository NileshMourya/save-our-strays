import FeatureBlock from "@/components/FeatureBlock";

export default function ProgramCard({ program, index }) {
  return (
    <FeatureBlock
      title={program.title}
      description={program.description}
      image={program.image}
      imageAlt={program.title}
      reverse={index % 2 === 1}
      as="h3"
    />
  );
}
