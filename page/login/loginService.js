/**
 * Created by nghia on 05/04/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$rootScope', '$window'];

    function loginService($http, $rootScope,$window){
        return {
            login: function (data) {
                return $http({
                    method: 'POST',
                    url: $rootScope.url + 'admin/adminLogin',
                    data: data
                });
            },
            isLogin: function(){
                if ($window.sessionStorage["user"]) {
                    var user = JSON.parse($window.sessionStorage["user"]);
                }
                return(user)? user : false;
            },
            logOut: function(){
                $window.sessionStorage["user"] = null;
            }
        }
    }
})(angular);
