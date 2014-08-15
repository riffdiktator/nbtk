/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt){

    grunt.config('concat',{
        dist: {
            src: [
                'src/scripts/core/**/*.js',
                'src/scripts/app/**/*.js'
            ],
            dest: 'app/js/scripts.js'
        }
    })

}