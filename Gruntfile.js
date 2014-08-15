/**
 * Created by riffdiktator on 12.08.2014.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: require('./package.json')
    })

    grunt.loadTasks('grunt-tasks');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect', 'watch']);
}