import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import TeamGrid from "@/components/TeamGrid";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/data/team";
import styles from "./page.module.css";

export const metadata = {
  title: "About Save Our Strays Mumbai",
  description:
    "Meet the team behind Save Our Strays Mumbai and learn about our vision and mission for humane, scientific street animal welfare.",
};

export default function AboutPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className="eyebrow">About us</p>
        <h1 className={styles.heroTitle}>Who we are</h1>
        <p className={styles.heroText}>
          We are a team of committed changemakers who believe that every
          helping hand can transform the life of an animal in need. What
          began as a small effort to care for injured and abandoned animals
          has grown into a mission to create long term, compassionate,
          humane and scientific solutions such as sterilisations for the
          street cats and dogs.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Our team" />
        </ScrollReveal>
        <TeamGrid members={teamMembers} />
      </section>

      <section className={`container ${styles.visionMission}`}>
        <div className={styles.visionMissionCopy}>
          <div>
            <h2 className={styles.subTitle}>Our vision</h2>
            <p>
              Our vision is to build a compassionate community where humans
              and street animals live in harmony. Through medical
              interventions, rescue operations and awareness, we work to
              ensure that every street animal is provided with love, care
              and dignity.
            </p>
          </div>
          <div>
            <h2 className={styles.subTitle}>Our mission</h2>
            <p>
              We exist to end the silent suffering of street animals. Our
              mission is to heal the injured, stop the cycle of cruelty
              through sterilisation and vaccination, and give second
              chances to those who cannot speak for themselves.
            </p>
          </div>
        </div>
        <div className={styles.visionMissionImage}>
          <Image
            src="/images/about/mission.svg"
            alt="Save Our Strays team caring for a rescued animal"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={styles.image}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
