/**
 * Main AngularJS Web Application
 */
var app = angular.module('TaskManager', [
    'ProjectService',
    'ProjectController',
    'RegisterController',
    'UserAccountController',
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/project", {templateUrl: "partials/project.html", controller: "ProjectCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});
