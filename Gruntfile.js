module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
	      removeComments:true,
        collapseWhitespace: true
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin:{
      files:{
	      src:'./rectangle.css',
	      dest:'dist/rectangle.css'
      }
    },
    uglify:{
	    file:{
	      src:'./rectangle.js',
	      dest:'dist/rectangle.js'
	    }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify']); 
};