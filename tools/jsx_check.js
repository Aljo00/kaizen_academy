const fs = require("fs");
const path = process.argv[2];
const s = fs.readFileSync(path, "utf8");
const tagRe = /<\/?([A-Za-z0-9_\-]+)([^>]*)>/g;
let match;
const stack = [];
const lines = s.split("\n");
function lineNumber(idx) {
  let c = 0;
  for (let i = 0; i < lines.length; i++) {
    c += lines[i].length + 1;
    if (c > idx) return i + 1;
  }
  return lines.length;
}
while ((match = tagRe.exec(s)) !== null) {
  const full = match[0];
  const name = match[1];
  const closing = full.startsWith("</");
  const selfClose =
    /\/>\s*$/.test(full) ||
    (/(^|\s)\w+=".*?"/.test(match[2]) && /\/$/.test(match[2]));
  if (closing) {
    if (stack.length === 0) {
      console.log(
        "Closing without opening",
        name,
        "at",
        match.index,
        "line",
        lineNumber(match.index),
      );
    } else {
      const last = stack.pop();
      if (last !== name)
        console.log(
          "Mismatched closing",
          name,
          "expected",
          last,
          "at",
          match.index,
          "line",
          lineNumber(match.index),
        );
    }
  } else if (!selfClose) {
    // ignore fragments like <Component /> detection via slash
    stack.push(name);
  }
}
if (stack.length) console.log("Unclosed tags on stack:", stack);
else console.log("All tags matched");
