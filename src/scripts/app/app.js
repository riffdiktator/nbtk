/**
 * Created by riffdiktator on 12.08.2014.
 */
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/profile',{
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        })
        .when('/',{
            templateUrl: 'views/main-page.html',
            controller: 'MainPageController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

