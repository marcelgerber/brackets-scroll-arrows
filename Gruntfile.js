module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        lesslint: {
            src: ["**.less"],
            options: {
                csslint: {
                    "known-properties": false,
                    "adjoining-classes": false
                }
            }
        },
        zip: {
            main: {
                dest: "scroll-arrows.zip",
                src: [
                    "styles/**",
                    "*.md",
                    "*.js",
                    "package.json"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-lesslint");
    grunt.loadNpmTasks("grunt-zip");

    grunt.registerTask("lint", ["lesslint"]);
    grunt.registerTask("build", ["zip"]);
};
