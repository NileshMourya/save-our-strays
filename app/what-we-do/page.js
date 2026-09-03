import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { programs, catCentre } from "@/data/programs";
import styles from "./page.module.css";

export const metadata = {
  title: "Animal Rescue, Sterilisation & Welfare | Save Our Strays Mumbai",
  description:
    "Explore Save Our Strays' programmes: sterilisation, vaccination, medical care, community feeding, adoption and awareness for Mumbai's street animals.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className="eyebrow">What we do</p>
        <h1 className={styles.heroTitle}>We Care</h1>
        <p className={styles.heroText}>
          At Save Our Strays, we work where it matters most &mdash; on the
          streets, in crisis, and at scale. Since 2003, we have been
          dedicated to improving the lives of street and ownerless cats and
          dogs across Mumbai, ensuring they don&rsquo;t just survive, but
          live healthier, dignified lives.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        {programs.map((program, index) => (
          <ProgramCard key={program.slug} program={program} index={index} />
        ))}
      </section>

      <section className={`${styles.catCentre}`}>
        <div className={`container ${styles.catCentreHeader}`}>
          <ScrollReveal as="div">
            <SectionTitle
              title="Our Cat Centre"
              description={catCentre.intro}
            />
          </ScrollReveal>
        </div>
        <div className={`container ${styles.catCentreGrid}`}>
          {catCentre.sections.map((section) => (
            <div key={section.title} className={styles.catCentreCard}>
              <div className={styles.catCentreImage}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>
              <h3 className={styles.catCentreTitle}>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
