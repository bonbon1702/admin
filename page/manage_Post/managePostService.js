/**
 * Created by Nam on 19/4/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('managePostService', managePostService);

    managePostService.$inject = ['$http', '$rootScope'];

    function managePostService($http, $rootScope){
        return {
            getAllPost: function() {
                return $http.get($rootScope.url + 'admin/getAllPost');
            },
            deletePost: function(data){
              return $http.get($rootScope.url + 'admin/deletePost/' + data);
            }
        }
    }
})(angular);

