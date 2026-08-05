const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const roots = [path.resolve("src/public"), path.resolve(".")];
const tasks = [];
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const name of fs.readdirSync(root)) {
    const full = path.join(root, name);
    if (fs.lstatSync(full).isDirectory()) continue;
    const ext = path.extname(name).toLowerCase();
    if (![".webp", ".jpg", ".jpeg"].includes(ext)) continue;
    if (root.endsWith(path.join("src", "public")) || root.endsWith("public")) {
      if (name.toLowerCase().includes("founder")) continue;
    }
    tasks.push({ full, ext, name });
  }
}

(async () => {
  if (!tasks.length) {
    console.log("No image files found for compression.");
    return;
  }
  for (const { full, ext, name } of tasks) {
    const stat = fs.statSync(full);
    const before = stat.size;
    try {
      const buffer =
        ext === ".webp"
          ? await sharp(full).webp({ quality: 70, effort: 6 }).toBuffer()
          : await sharp(full).jpeg({ quality: 75, mozjpeg: true }).toBuffer();
      const tmp = full + ".opt.tmp";
      fs.writeFileSync(tmp, buffer);
      const afterStat = fs.statSync(tmp);
      fs.unlinkSync(full);
      fs.renameSync(tmp, full);
      const after = fs.statSync(full).size;
      console.log(`${name}\t${before} -> ${after}`);
    } catch (err) {
      console.error(`ERROR ${name}: ${err.message}`);
    }
  }
})();
