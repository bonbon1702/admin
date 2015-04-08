/**
 * Created by nghia on 05/04/2015.
 */
(function (angular) {
    angular
        .module('adminApp', [
            'ngRoute',
            'angularCharts',
            'smart-table'
        ])
        .config(function ($routeProvider,$locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'page/login/templates/login.html',
                    controller: 'loginController'
                })
                .when('/dashboard',{
                    templateUrl: 'page/dashboard/templates/dashboard.html',
                    controller: 'dashboardController'
                });
        })
        .run(function ($rootScope, $location,$route,$timeout, loginService) {
            var original = $location.path;
            $location.path = function (path, reload) {
                if (reload === false) {
                    var lastRoute = $route.current;
                    if (lastRoute) {
                        var un = $rootScope.$on('$locationChangeSuccess', function () {
                            $route.current = lastRoute;
                            $route.current.ignore = true;
                            un();
                        });
                        $timeout(function(){
                            un()
                        }, 500);
                    }
                }
                return original.apply($location, [path]);
            };
            $rootScope.$on("$routeChangeStart", function() {
                if (!loginService.isLogin()){
                    $location.path('/')
                }
            });


            $rootScope.url = 'http://103.7.40.222:8081/api/';
            //$rootScope.url = 'http://trendy-server.dev/api/';
        });
})(angular);