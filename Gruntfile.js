module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      minify: {
        files: {
          'frontend/css/min/bundle.min.css': ['frontend/css/bundle.css']
        }
      }
    },

    shell: {
      js_compile: {
        command: [
          'cd frontend/js/closure-compiler',
          'make compile'
        ].join('&&')
      }
    },

    'append-sourcemapping': {
      main: {
        files: {
          'frontend/js/min/bundle.min.js': '/js/min/bundle.min.map'
        }
      }
    },

    // Hotswap ng, css, and js files for dev.
    watch: {
      ng: {
        files: ['frontend/templates/ng/*.ng'],
        tasks: ['ngtemplates']
      },
      css: {
        files: [
          'frontend/css/*.css'
        ],
        tasks: ['cssmin']
      },
      js: {
        files: [
          'frontend/js/src/*.js',
          'frontend/js/src/**/*.js'
        ],
        tasks: ['shell:js_compile', 'append-sourcemapping']
      }
    },

    // Compile/Bundle Angular templates.
    ngtemplates: {
      app: {
        cwd: 'frontend/templates',
        src: 'ng/*.ng',
        dest: 'frontend/js/src/ng/templates.ng.js',
        options: {
          prefix: '/',
          module: 'ngmaterial.ng',
          bootstrap: function(module, script) {
            return "goog.provide('ngmaterial.ng');\n" +
                   "ngmaterial.ng = angular.module('" + module + "', []).\n" +
                   "\t\trun(['$templateCache',\n" +
                   "\t\t\t\t function($templateCache) {\n" +
                   script + '\n' +
                   "}]);";
          },
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeComments: true
          }
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-shell');

  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.loadNpmTasks('grunt-append-sourcemapping');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dev', [
    'ngtemplates',
    'cssmin',
    'shell:js_compile',
    'append-sourcemapping',
    'watch'
  ]);

  grunt.registerTask('prod', [
    'ngtemplates',
    'cssmin',
    'shell:js_compile',
    'append-sourcemapping'
  ]);

  grunt.registerTask('default', [
    'dev'
  ]);

};
