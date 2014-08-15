/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt){

    grunt.config('connect',{
        server: {
            options: {
                hostname: 'localhost',
                port: 8888,
                base: 'app',
                open: true,
                livereload: true
            }
        }
    })
};