module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit: {
      all: ['test/**/*.test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      scripts: {
        files: ['<%= jshint.all %>'],
        tasks: ['default']
      }
    }
  });

  // default task
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};