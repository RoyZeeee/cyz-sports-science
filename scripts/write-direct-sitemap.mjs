import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));
const sitemapIndexPath = join(distDir, "sitemap-index.xml");
const sourceSitemapPath = join(distDir, "sitemap-0.xml");
const directSitemapPath = join(distDir, "sitemap.xml");
const robotsPath = join(distDir, "robots.txt");

const sitemap = await readFile(sourceSitemapPath, "utf8");
await writeFile(directSitemapPath, sitemap);

const sitemapIndex = await readFile(sitemapIndexPath, "utf8");
const sitemapIndexMatch = sitemapIndex.match(/<loc>([^<]+sitemap-0\.xml)<\/loc>/);
const defaultSite = "https://royzeeee.github.io/cyz-sports-science/";

if (sitemapIndexMatch || process.env.SITE_URL) {
  const sourceSitemapUrl = sitemapIndexMatch?.[1] ?? new URL("sitemap-0.xml", process.env.SITE_URL).href;
  const directSitemapUrl = sourceSitemapUrl.includes("example.github.io")
    ? new URL("sitemap.xml", defaultSite).href
    : sourceSitemapUrl.replace(/sitemap-0\.xml$/, "sitemap.xml");
  const robots = `User-agent: *
Allow: /

Sitemap: ${directSitemapUrl}
`;
  await writeFile(robotsPath, robots);
}
