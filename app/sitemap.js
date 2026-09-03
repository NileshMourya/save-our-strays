import { navigationLinks } from "@/data/navigation";

export default function sitemap() {
  const baseUrl = "https://www.saveourstraysmumbai.org";
  const staticRoutes = ["/privacy-policy", "/terms-conditions"];

  const routes = [
    ...navigationLinks.map((link) => link.href),
    ...staticRoutes,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
