import type { MetadataRoute } from "next";

const BASE_URL = "https://jonofox.com";
const locales = ["en", "de"];

const pages = [
  { path: "", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/work/aerospike-provisioning", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/work/aerospike-voyager", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/work/design-systems", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/work/goodlife", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/work/sygnum", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );
}
