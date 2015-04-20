/**
 * Created by nghia on 05/04/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('manageUserService', manageUserService);

    manageUserService.$inject = ['$http', '$rootScope'];

    function manageUserService($http, $rootScope){
        return {
            getAllUser: function() {
                return $http.get($rootScope.url + 'admin/getAllUser');
            },
            banUser: function(user_id){
                return $http.get($rootScope.url + 'admin/banUser/'+ user_id);
            },
            unBanUser: function(user_id){
                return $http.get($rootScope.url + 'admin/unBanUser/' + user_id);
            }
        }
    }
})(angular);
