const fs = require("node:fs/promises");
const path = require("node:path");

const sharp = require(path.resolve(__dirname, "../../.webp-tools/node_modules/sharp"));

const inputDir = path.resolve(__dirname, "../images/keychains");
const outputDir = path.resolve(__dirname, "../images/keychains-webp");

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const entries = await fs.readdir(inputDir, { withFileTypes: true });
  const pngFiles = entries
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".png")
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  for (const fileName of pngFiles) {
    const inputPath = path.join(inputDir, fileName);
    const outputPath = path.join(outputDir, `${path.parse(fileName).name}.webp`);

    await sharp(inputPath)
      .resize({
        width: 1200,
        height: 1200,
        fit: "inside",
        withoutEnlargement: true
      })
      .webp({
        quality: 78,
        effort: 6
      })
      .toFile(outputPath);

    const [inputStat, outputStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath)
    ]);

    const savedBytes = inputStat.size - outputStat.size;
    const savedPercent = ((savedBytes / inputStat.size) * 100).toFixed(1);
    console.log(`${fileName} -> ${path.basename(outputPath)} (${savedPercent}% smaller)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
