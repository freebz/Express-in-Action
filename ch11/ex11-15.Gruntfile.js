// 예제 11.15 Gruntfile 골격

module.exports = function(grunt) {

  grunt.registerTask("default", "Say Hello World.", function() {
    grunt.log.write("Hello world!");
  });

};
