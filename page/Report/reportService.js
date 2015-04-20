/**
 * Created by Nam on 19/4/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('reportService', reportService);

    reportService.$inject = ['$http', '$rootScope'];

    function reportService($http, $rootScope){
        return {

        }
    }
})(angular);
