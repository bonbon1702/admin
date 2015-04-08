/**
 * Created by nghia on 05/04/2015.
 */
(function(angular) {
    angular.module('adminApp')
        .factory('dashboardService', dashboardService);

    dashboardService.$inject = ['$http', '$rootScope'];

    function dashboardService($http, $rootScope){
        return {
            getAllUser: function() {
                return $http.get($rootScope.url + 'admin/getAllUser');
            },
            banUser: function(user_id){
                return $http.get($rootScope.url + 'admin/banUser/'+ user_id);
            },
            unBanUser: function(user_id){
                return $http.get($rootScope.url + 'admin/unBanUser/' + user_id);
            },
            getAllShop: function(){
                return $http.get($rootScope.url + 'admin/getAllShop');
            },
            approveShop: function(shop_id){
                return $http.get($rootScope.url + 'admin/approveShop/' + shop_id);
            },
            unApproveShop: function(shop_id){
                return $http.get($rootScope.url + 'admin/unApproveShop/' + shop_id);
            }
        }
    }
})(angular);
