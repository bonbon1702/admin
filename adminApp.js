/**
 * Created by nghia on 05/04/2015.
 */
(function (angular) {
    angular
        .module('adminApp', [
            'ngRoute',
            'angularCharts',
            'smart-table',
            'ngDialog'
        ])
        .config(function ($routeProvider,$locationProvider) {
            //$locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'page/login/templates/login.html',
                    controller: 'loginController'
                })
                .when('/manageUser',{
                    templateUrl: 'page/manage_User/templates/manageUser.html',
                    controller: 'dashboardController'
                })
                .when('/managePost',{
                    templateUrl: 'page/manage_Post/templates/managePost.html',
                    controller: 'managePostController'
                })
                .when('/manageShop',{
                    templateUrl: 'page/manage_Shop/templates/manageShop.html',
                    controller: 'manageShopController'
                })
                .when('/report',{
                    templateUrl: 'page/Report/templates/report.html',
                    controller: 'reportController'
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


            //$rootScope.url = 'http://103.7.40.222:8081/api/';
            $rootScope.url = 'http://trendy-server.dev/api/';
            //$rootScope.url ='http://localhost:81/projects/Trendy-Server/public/api/';
        });
})(angular);