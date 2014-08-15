/**
 * Created by riffdiktator on 15.08.2014.
 */
module.exports = function(grunt){

    grunt.config('compass',{
        dist: {
            options: {
                sassDir: 'src/styles',
                cssDir: 'app/css',
                environment: 'production',
                require: 'jacket'
            }
        }
    })

}