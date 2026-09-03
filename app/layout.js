// Self-hosted variable fonts via @fontsource instead of next/font/google,
// so the production build doesn't need to reach fonts.googleapis.com.
// Swap these two imports for next/font/google (Fraunces + Manrope) if the
// deployment environment has open internet access and you'd prefer that.
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.saveourstraysmumbai.org"),
  title: {
    default: "Save Our Strays Mumbai | Street Animal Welfare NGO",
    template: "%s | Save Our Strays Mumbai",
  },
  description:
    "Save Our Strays (SOS) is a Mumbai-based animal welfare NGO working on sterilisation, vaccination, rescue and adoption for street dogs and cats since 2003.",
  openGraph: {
    title: "Save Our Strays Mumbai | Street Animal Welfare NGO",
    description:
      "Sterilisation, vaccination, rescue and adoption for Mumbai's street dogs and cats since 2003.",
    url: "https://www.saveourstraysmumbai.org",
    siteName: "Save Our Strays Mumbai",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Save Our Strays",
    alternateName: "SOS Mumbai",
    url: "https://www.saveourstraysmumbai.org",
    email: "saveourstraysmum@gmail.com",
    telephone: "+91-9820141310",
    foundingDate: "2003",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khar, Mumbai",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/save_our_strays_",
      "https://www.facebook.com/share/17zkHiXdeV/",
      "https://youtube.com/@saveourstrays5073",
      "https://www.linkedin.com/in/save-our-strays-sos-4397bb305/",
    ],
  };

  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
