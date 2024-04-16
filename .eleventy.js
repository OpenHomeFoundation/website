module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require("./config/css-config.js"));
  eleventyConfig.addPlugin(require('./config/js-config.js'));

  // 	--------------------- Passthrough File Copy -----------------------
  eleventyConfig.addPassthroughCopy("src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy({
    "src/assets/favicon/*": "/",
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
