// app module
var demoApp = angular.module('demoApp', []);

// routes
demoApp.config(function ($routeProvider) {

   $routeProvider
    .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
    .when('/about',
        {
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
    .when('/posts',
        {
            controller: 'PostController',
            templateUrl: 'views/posts.html'
        })
    .when('/ECS',
        {
            controller: 'ECSController',
            templateUrl: 'views/ECS.html'
        })
    .when('/sophomore',
        {
            controller: 'SophomoreController',
            templateUrl: 'views/sophomore.html'
        })
    .when('/MMA',
        {
            controller: 'MMAController',
            templateUrl: 'views/MMA.html'
        })
    .when('/GameDesign',
        {
            controller: 'GameDesignController',
            templateUrl: 'views/GameDesign.html'
        })
    .when('/projects',
        {
            controller: 'ProjectsController',
            templateUrl: 'views/projects.html'
        })
    .when('/resources',
        {
            controller: 'ResourcesController',
            templateUrl: 'views/resources.html'
        })
        
    .otherwise({ redirectTo: '/' });

});
