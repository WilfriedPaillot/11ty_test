const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    
    // Watch sass folder for changes
    eleventyConfig.addWatchTarget("./src/sass/");

    return {
        dir: {
            input: "src"
        }
    }
};