const fs = require("fs");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("cacheKey", (url) => {
        const [urlPart, paramPart] = url.split("?");
        const params = new URLSearchParams(paramPart || "");
        const relativeUrl = "./dist/" + ((urlPart.charAt(0) == "/") ? urlPart.substring(1) : urlPart);

        try {
            const fileStats = fs.statSync(relativeUrl);

            const dateTimeModified = Math.floor(fileStats.mtime.getTime() / 1000);
            params.set("v", dateTimeModified);

        } catch (error) { }

        if (params.has("v")) {
            return `${urlPart}?${params}`;
        }

        return url;
    });
}