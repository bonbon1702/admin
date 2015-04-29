/**
 * Created by Nam on 19/4/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('reportService', reportService);

    reportService.$inject = ['$http', '$rootScope'];

    function reportService($http, $rootScope){
        return {
            getLikeInteraction: function(){
                return $http.get($rootScope.url + 'admin/getInteractionLike');
            },
            getFavoriteInteraction: function(){
                return $http.get($rootScope.url + 'admin/getFavoriteInteraction');
            },
            getCommentInteraction: function(){
                return $http.get($rootScope.url + 'admin/getCommentInteraction');
            }
        }
    }
})(angular);
