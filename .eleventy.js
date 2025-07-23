const { resolve } = require("path");
const { statSync, existsSync } = require("fs");
const yaml = require("js-yaml");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require("./config/css-config.js"));
  eleventyConfig.addPlugin(require("./config/js-config.js"));

  // 	--------------------- Passthrough Assets -----------------------
  eleventyConfig.addPassthroughCopy({
    "src/assets/fonts/": "assets/fonts/",
    "src/assets/images/": "assets/images/",
    "src/assets/favicon/*": "/",
    "src/robots.txt": "/robots.txt",
    "badges/": "badges/",
  })

  //   --------------------- Passthrough CSS -----------------------
  eleventyConfig.addPassthroughCopy({
    "node_modules/swiper/swiper-bundle.min.css": "assets/swiper-bundle.min.css",
  });

  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addTransform("cache-buster", function (content, outputPath) {
    const assetsInputDir = resolve(eleventyConfig.dir.input, "assets");
    const assetsOutputDir = resolve(eleventyConfig.dir.output, "assets");
    if (outputPath.endsWith(".html")) {
      return content.replace(
        /="\/assets\/([^"]+\.(css|js))"/g,
        function (_, matcher) {
          const filepath = matcher.split("?")[0];
          let timestamp

          if (existsSync(resolve(assetsInputDir, filepath))) {
            // These are our source files, so we use their modification time
            timestamp = statSync(resolve(assetsInputDir, filepath)).mtime.getTime();
          } else if (existsSync(resolve(assetsOutputDir, filepath))) {
            // In cases where we are getting the output files from other places (like node_modules)
            // we use the output directory's modification time.
            timestamp = statSync(resolve(assetsOutputDir, filepath)).mtime.getTime();
          } else {
            throw new Error(`File not found: ${filepath}`);
          }

          return `="/assets/${filepath}?v=${timestamp}"`;
        }
      );
    }
    return content;
  });

  return {
    dir: {
      data: "../_data",
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: "liquid",
    pathPrefix: "/",
  };
};
