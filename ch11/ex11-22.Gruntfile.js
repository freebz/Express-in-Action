// 예제 11.22 Browserify와 LESS, Uglify를 사용하는 Gruntfile

module.exports = function(grunt) {

  grunt.initConfig({
    less: { /* ... */ },
    browserify: { /* ... */ },
    uglify: {
      myApp: {
	files: {
	  "tmp/build/main.min.js": ["tmp/build/main.js"]
	}
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["browserify", "less"]);
  grunt.registerTask("build", ["browserify", "less", "uglify"]);

};
