module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require("./config/css-config.js"));
  eleventyConfig.addPlugin(require("./config/js-config.js"));

  //   --------------------- Global Data -----------------------
  eleventyConfig.addGlobalData("CACHE_KEY", btoa("" + new Date().valueOf()).replaceAll("=", ""));

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

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: "liquid",
    pathPrefix: "/",
  };
};
