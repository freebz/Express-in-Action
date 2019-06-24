// 예제 11.23 감시가 추가된 Gruntfile

module.exports = function(grunt) {

  grunt.initConfig({
    less: { /* ... */ },
    browserify: { /* ... */ },
    uglify: { /* ... */ },
    watch: {
      scripts: {
	files: ["**/*.js"],
	tasks: ["browserify"]
      },
      styles: {
	files: ["**/*.less"],
	tasks: ["less"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["browserify", "less"]);
  grunt.registerTask("build", ["browserify", "less", "uglify"]);
};
