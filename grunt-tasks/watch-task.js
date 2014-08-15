/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt){

    grunt.config('watch',{
        css: {
            files: ['src/styles/**/*.scss'],
            tasks: ['compass'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        html: {
            files: ['src/pages/**/*.jade'],
            tasks: ['jade'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        scripts: {
            files: ['src/scripts/**/*.js'],
            tasks: ['newer:concat'],
            options: {
                spawn: false,
                livereload: true
            }
        }
    })

};