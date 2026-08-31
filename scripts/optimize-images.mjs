/**
 * Gera as versoes WebP das imagens do site a partir dos PNGs originais.
 *
 * Por que existe: os PNGs originais tem 2048x2048 e ~6,6 MB cada, mas sao
 * exibidos em circulos de 128px e 52px. Servir o original custava ~13 MB de
 * download por visita. As versoes geradas aqui pesam ~50 KB no total.
 *
 * Roda automaticamente antes do build (script "prebuild"). A pasta de saida
 * e ignorada pelo git: o que versionamos e o original, nao o derivado.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inDir = path.join(root, "src/imports");
const outDir = path.join(inDir, "generated");

// [origem, destino, lado em px]. O lado cobre ate 4x o tamanho de exibicao,
// para telas retina, e ainda assim fica na casa das dezenas de KB.
const jobs = [
  ["Gemini_Generated_Image_v95gniv95gniv95g.png", "avatar-michel.webp", 512],
  ["Gemini_Generated_Image_4z3u2b4z3u2b4z3u.png", "avatar-cachorra.webp", 256],
  ["netflix_logo_icon_170919.png", "netflix-logo.webp", 256],
];

await mkdir(outDir, { recursive: true });

for (const [src, dst, size] of jobs) {
  await sharp(path.join(inDir, src))
    .resize(size, size, { fit: "cover" })
    .webp({ quality: 86, effort: 6 })
    .toFile(path.join(outDir, dst));
  console.log(`imagens: ${src} -> generated/${dst} (${size}px)`);
}
