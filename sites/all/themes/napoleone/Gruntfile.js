'use strict';

var paths = require('compass-options').paths();

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: 35729
      },
      sass: {
        files: [paths.sass + '/{,**/}*.scss'],
        tasks: ['compass:dev'],
        options: {
          livereload: false
        }
      },
      css: {
        files: [paths.css + '/{,**/}*.css']
      },
      images: {
        files: [paths.img + '/**']
      },
      js: {
        files: [
          paths.js + '/{,**/}*.js',
          '!' + paths.js + '/{,**/}*.js'
        ],
        tasks: ['jshint', 'uglify:dev']
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        sourcemap: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      dist: {
        options: {
          environment: 'production',
          imagesDir: paths.img + '-min',
          force: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        paths.js + '/{,**/}*.js',
        '!' + paths.js + '/{,**/}*.min.js'
      ]
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: paths.img,
          src: ['**/*.png', '**/*.jpg'],
          dest: paths.img + '-min/'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: paths.img,
          src: '**/*.svg',
          dest: paths.img + '-min'
        }]
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expand: true,
          cwd: paths.js,
          src: ['**/*.js', '!**/*.min.js'],
          dest: paths.js,
          ext: '.min.js'
        }]
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: paths.js,
          src: ['**/*.js', '!**/*.min.js'],
          dest: paths.js,
          ext: '.min.js'
        }]
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: paths.img,
            src: ['**', '!**/*.svg', '!**/*.png', '!**/*.jpg'],
            dest: paths.img + '-min'
          }
        ]
      }
    },

    parallel: {
      assets: {
        grunt: true,
        tasks: ['imagemin', 'svgmin', 'uglify:dist', 'copy:dist']
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: "http://local.napoleone.ca"
      },
      //prod: {
      //  options: {
      //    url: "http://local.napoleone.ca",
      //    locale: "en_CA",
      //    strategy: "desktop",
      //    threshold: 80
      //  }
      //},
      paths: {
        options: {
          paths: ["/"],
          locale: "en_CA",
          strategy: "desktop",
          threshold: 80
        }
      }
    }
  });


  grunt.event.on('watch', function(action, filepath) {
    grunt.config([
      'compass:dev',
      'jshint'
    ], filepath);
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('build', [
    'parallel:assets',
    'compass:dist',
    'jshint'
  ]);
};
