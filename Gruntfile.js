/*jslint node: true*/
'use strict';

module.exports = function(grunt){

	grunt.initConfig({

		compass: {
			global: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					force: true,
					outputStyle: 'compressed' // nested, expanded, compact, compressed
				}
		  	}
		},

		watch: {
			files: [
				'sass/*.scss',
				'js/*.js'
			],
			tasks: ['compass', 'uglify']
		},

		uglify: {
		    options: {
		      compress: {
		        global_defs: {
		          "DEBUG": false
		        },
		        dead_code: true
		      }
		    },
		    my_target: {
		      files: {
		         'js/build/alexshive.min.js': 
		         	[
		         	'js/jquery-2.0.3.min.js', 
		         	'js/jquery.base64.min.js', 
		         	'js/unslider.min.js', 
		         	'js/jquery.validate.min.js', 
		         	'js/script.js']
		      }
		    }
		  }

	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['compass']);

};