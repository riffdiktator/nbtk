/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt){
    grunt.config('jade',{
        compile: {
            options: {
                data: {
                    debug: false
                },
                pretty: true
            },
            files: [{
                cwd: "src/pages",
                src: "**/*.jade",
                dest: "app",
                expand: true,
                ext: ".html"
            }]
        }
    })
};