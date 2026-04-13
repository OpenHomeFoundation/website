const { readFileSync } = require("fs");

module.exports = {
  eleventyComputed: {
    reading_time: (data) => {
      const filePath = data.page.inputPath;
      if (!filePath) return null;
      try {
        const raw = readFileSync(filePath, "utf-8");
        const text = raw
          .replace(/---[\s\S]*?---/, "")
          .replace(/<[^>]*>/g, "")
          .replace(/\s+/g, " ")
          .trim();
        const words = text.split(" ").filter((w) => w).length;
        return Math.max(1, Math.floor(words / 250) + 1);
      } catch {
        return null;
      }
    },
  },
};
