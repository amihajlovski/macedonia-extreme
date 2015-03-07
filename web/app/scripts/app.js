'use strict';


var app = angular.module('macedoniaExtreme', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider, $locationProvider){
      
        $routeProvider.
                when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
        }).
                when('/biking', {
                    templateUrl: 'views/biking.html',
                    controller: 'ContentController'
        }).
                when('/hiking', {
                    templateUrl: 'views/hiking.html',
                    controller: 'ContentController'
        }).
                when('/jeep-safari', {
                    templateUrl: 'views/jeep-safari.html',
                    controller: 'ContentController'
        }).
                when('/kayaking', {
                    templateUrl: 'views/kayaking.html',
                    controller: 'ContentController'
        }).
                when('/paragliding', {
                    templateUrl: 'views/paragliding.html',
                    controller: 'ContentController'
        }).
                when('/rock-climbing', {
                    templateUrl: 'views/rock-climbing.html',
                    controller: 'ContentController'
        }).
                when('/scuba-diving', {
                    templateUrl: 'views/scuba-diving.html',
                    controller: 'ContentController'
        }).
                when('/snowboarding', {
                    templateUrl: 'views/snow-boarding.html',
                    controller: 'ContentController'
        }).
                otherwise({
                    redirectTo: '/home'
        });
        
        //$locationProvider.html5Mode(true);
        
}]);