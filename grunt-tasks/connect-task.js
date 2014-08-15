/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt){

    grunt.config('connect',{
        server: {
            options: {
                port: 8888,
                base: 'app',
                open: true,
                livereload: true
            }
        }
    })
};