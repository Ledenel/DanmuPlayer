module.exports = function (grunt) {


    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {},
                release: {
                    files: {
                        'dist/js/danmuplayer.min.js': ['src/js/jquery.shCircleLoader.js', 'src/js/jquery.danmu.js', 'src/js/colpick.js', 'src/js/sco.tooltip.js', 'src/js/fullscreen.js' ,'src/js/main.js']
                    }
                }
            },
            cssmin: {
                target: {
                    files: {
                        'dist/css/danmuplayer.css': ['src/css/*.css']
                    }
                }
            },
            'font-spider': {
                options: {}
                ,
                main: {
                    src: './demo/index.html'
                }
            },
            'watch': {
                all: {
                    files: ['src/css/*.css', 'src/js/*.js'],
                    tasks: ['default']
                }
            }
        }
    )
    ;


    grunt.loadNpmTasks('grunt-contrib-uglify');
    //  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-font-spider');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify:release', 'cssmin', 'font-spider',]);

};

