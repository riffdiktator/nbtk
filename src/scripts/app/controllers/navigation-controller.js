/**
 * Created by riffdiktator on 12.08.2014.
 */
function NavigationController($scope, $http){
    $http.get('http://localhost:3333/api/nav').
        success(function(data, status, headers, config) {
            $scope.navigation = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
};