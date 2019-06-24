// 예제 11.21 Gruntfile과 Browserify

module.exports = function(grunt) {

  grunt.initConfig({
    less: { /* ... */ },
    browserify: {
      client: {
	src: ["my_javascripts/main.js"],
	dest: "tmp/build/main.js",
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["browserify", "less"]);
};
