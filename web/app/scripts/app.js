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
                    controller: 'MainController'
        }).
                when('/hiking', {
                    templateUrl: 'views/hiking.html',
                    controller: 'MainController'
        }).
                when('/jeep-safari', {
                    templateUrl: 'views/jeep-safari.html',
                    controller: 'MainController'
        }).
                when('/kayaking', {
                    templateUrl: 'views/kayaking.html',
                    controller: 'MainController'
        }).
                when('/paragliding', {
                    templateUrl: 'views/paragliding.html',
                    controller: 'MainController'
        }).
                when('/rock-climbing', {
                    templateUrl: 'views/rock-climbing.html',
                    controller: 'MainController'
        }).
                when('/scuba-diving', {
                    templateUrl: 'views/scuba-diving.html',
                    controller: 'MainController'
        }).
                when('/snow-boarding', {
                    templateUrl: 'views/snow-boarding.html',
                    controller: 'MainController'
        }).
                otherwise({
                    redirectTo: '/home'
        });
        
        //$locationProvider.html5Mode(true);
        
}]);