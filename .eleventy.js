const { resolve } = require("path");
const { statSync } = require("fs");

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

  eleventyConfig.addTransform("cache-buster", function (content, outputPath) {
    const assetsDir = resolve(eleventyConfig.dir.output, "assets");
    if (outputPath.endsWith(".html")) {
      return content.replace(
        /="\/assets\/([^"]+\.(css|js))"/g,
        function (_, matcher) {
          const filepath = matcher.split("?")[0];
          const fileStat = statSync(resolve(assetsDir, filepath));
          const timestamp = fileStat.mtime.getTime();
          return `="/assets/${filepath}?v=${timestamp}"`;
        }
      );
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: "liquid",
    pathPrefix: "/",
  };
};
