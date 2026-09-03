import Hero from "@/components/Hero";
import FeatureBlock from "@/components/FeatureBlock";
import ValuesSection from "@/components/ValuesSection";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactCounter from "@/components/ImpactCounter";
import ImageGallery from "@/components/ImageGallery";
import CTASection from "@/components/CTASection";
import { careAreas } from "@/data/values";
import { impactStats } from "@/data/impact";
import { galleryImages } from "@/data/gallery";
import styles from "./page.module.css";

export const metadata = {
  title: "Save Our Strays Mumbai | Street Animal Welfare NGO",
  description:
    "Save Our Strays is a Mumbai NGO dedicated to street animal welfare through sterilisation, vaccination, rescue and adoption of street dogs and cats since 2003.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className={`container ${styles.section}`}>
        <FeatureBlock
          title="Our Origin"
          image="/images/home/origin.svg"
          imageAlt="Save Our Strays' early sterilisation work in Andheri, Mumbai"
          description="Save Our Strays (SOS) was founded in 2003 by Mrs. Shirley Menon, moved by the plight of street animals in Andheri, Mumbai. What began as a local effort soon expanded, with sterilisation at its heart. With the support of In Defence of Animals (IDA) and the caregivers community, SOS grew from helping 20 dogs a month to over 46,000 sterilisations by 2024, proving that compassion, when organised, saves lives."
        />
      </section>

      <ValuesSection />

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="What we do" />
        </ScrollReveal>
        {careAreas.map((area, index) => (
          <FeatureBlock
            key={area.title}
            title={area.title}
            description={area.description}
            image={area.image}
            imageAlt={area.title}
            reverse={index % 2 === 1}
            as="h3"
          />
        ))}
        <p className={styles.learnMore}>
          <a href="/what-we-do" className="button button-outline">
            Learn more about what we do
          </a>
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Our numbers speak" />
        </ScrollReveal>
        <ImpactCounter stats={impactStats} />
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Moments from the field" />
        </ScrollReveal>
        <ImageGallery images={galleryImages} />
      </section>

      <CTASection />
    </>
  );
}
