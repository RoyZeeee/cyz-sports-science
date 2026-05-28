import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "public/images/muscles-front-back.svg");
const outputDir = resolve(root, "public/images/anatomy-targets");
const anatomySvg = readFileSync(sourcePath, "utf-8");

const anatomyPathMap = {
  "upper-chest": ["path861"],
  "mid-chest": ["path847"],
  "lower-chest": ["path847"],
  lats: ["path2220"],
  "upper-back": ["path1268", "path1919", "path1432"],
  "mid-back": ["path1268", "path1919"],
  "lower-back": ["path1919"],
  "rear-delts": ["path1452", "path1432"],
  "front-delts": ["path861"],
  "side-delts": ["path861"],
  "rotator-cuff": ["path2085", "path2115", "path2163"],
  quads: ["path1554", "path1366"],
  hamstrings: ["path2990", "path2900", "path2931", "path2803"],
  "glute-max": ["path2744"],
  "glute-med": ["path2744"],
  adductors: ["path1337"],
  calves: ["path3254", "path3216", "path3075", "path3022"],
  biceps: ["path908", "path968", "path881"],
  triceps: ["path1109", "path1513", "path1486", "path1542"],
  forearms: ["path1065", "path1080", "path998", "path987", "path991"],
  abs: ["path1100"],
  obliques: ["path1100"],
};

function findSvgElementById(svg, id) {
  const startTag = new RegExp(`<(?<tag>path|rect|use|g)\\b[^>]*\\bid="${id}"[^>]*>`, "m").exec(svg);
  const selfClosing = new RegExp(`<(?<tag>path|rect|use)\\b[^>]*\\bid="${id}"[^>]*/>`, "m").exec(svg);
  if (selfClosing) return selfClosing[0];
  if (!startTag?.groups?.tag) return "";
  const tag = startTag.groups.tag;
  const start = startTag.index;
  if (tag !== "g") {
    const end = svg.indexOf(`</${tag}>`, start);
    return end === -1 ? "" : svg.slice(start, end + tag.length + 3);
  }

  let depth = 0;
  const tagPattern = /<\/?g\b[^>]*>/g;
  tagPattern.lastIndex = start;
  for (const match of svg.matchAll(tagPattern)) {
    if (match.index < start) continue;
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return svg.slice(start, match.index + match[0].length);
  }
  return "";
}

function expandUseElements(svg) {
  return svg.replace(/<use\b[\s\S]*?\/>/g, (tag) => {
    const useId = tag.match(/\bid="([^"]+)"/)?.[1];
    const href = tag.match(/\b(?:xlink:href|href)="#([^"]+)"/)?.[1];
    if (!useId || !href) return tag;
    const referenced = findSvgElementById(svg, href);
    if (!referenced) return tag;
    const transform = tag.match(/\btransform="([^"]+)"/)?.[1];
    const cloneIds = new Set([...referenced.matchAll(/\bid="([^"]+)"/g)].map((idMatch) => idMatch[1]));
    const cloned = referenced
      .replace(/\s+x="[^"]*"/g, "")
      .replace(/\s+y="[^"]*"/g, "")
      .replace(/\s+width="[^"]*"/g, "")
      .replace(/\s+height="[^"]*"/g, "")
      .replace(/\bid="([^"]+)"/g, (_match, id) => `id="${id}__${useId}"`)
      .replace(/\b(xlink:href|href)="#([^"]+)"/g, (match, attr, id) => (cloneIds.has(id) ? `${attr}="#${id}__${useId}"` : match));
    return transform ? `<g transform="${transform}">${cloned}</g>` : `<g>${cloned}</g>`;
  });
}

const mirrorReferenceMap = new Map();
for (const match of anatomySvg.matchAll(/<use\b[\s\S]*?\/>/g)) {
  const tag = match[0];
  const useId = tag.match(/\bid="([^"]+)"/)?.[1];
  const href = tag.match(/\b(?:xlink:href|href)="#([^"]+)"/)?.[1];
  if (!useId || !href) continue;
  const referenced = findSvgElementById(anatomySvg, href);
  const referencedIds = [...referenced.matchAll(/\bid="([^"]+)"/g)].map((idMatch) => idMatch[1]);
  for (const referencedId of referencedIds) {
    mirrorReferenceMap.set(referencedId, [...(mirrorReferenceMap.get(referencedId) ?? []), `${referencedId}__${useId}`]);
  }
}

const withMirrors = (ids) => [...new Set(ids.flatMap((id) => [id, ...(mirrorReferenceMap.get(id) ?? [])]))];

function paintSvg(slug, ids) {
  const targetIds = withMirrors(ids);
  const selector = targetIds.map((id) => `#${id}`).join(", ");
  const style = `<style><![CDATA[
    .semantic-anatomy-svg{background:#fbf7ef}
    ${selector ? `${selector}{fill:#137d78!important;fill-opacity:1!important;stroke:#053c3a!important;stroke-width:1.05!important;opacity:1!important}` : ""}
  ]]></style>`;

  const painted = expandUseElements(anatomySvg)
    .replace(/<\?xml[^>]*>\s*/i, "")
    .replace(/<svg\b([^>]*)>/, `<svg$1 class="semantic-anatomy-svg" role="img">${style}<title>${slug}</title>`);
  writeFileSync(resolve(outputDir, `${slug}.svg`), painted);
}

mkdirSync(outputDir, { recursive: true });
for (const [slug, ids] of Object.entries(anatomyPathMap)) {
  paintSvg(slug, ids);
}
