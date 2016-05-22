module.exports = function(grunt) {

  grunt.initConfig({
   sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/style.css': 'css/main.scss'
            }
        }
    },
	watch: {
		sass: {
			files: ['css/*.scss'],
			tasks: ['sass']
		}
	}
  });
  

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass']);

};