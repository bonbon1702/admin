/**
 * Created by Nam on 19/4/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .factory('manageShopService', manageShopService);

    manageShopService.$inject = ['$http', '$rootScope'];

    function manageShopService($http, $rootScope) {
        return {

            getAllShop: function () {
                return $http.get($rootScope.url + 'admin/getAllShop');
            },
            approveShop: function (shop_id) {
                return $http.get($rootScope.url + 'admin/approveShop/' + shop_id);
            },
            unApproveShop: function (shop_id) {
                return $http.get($rootScope.url + 'admin/unApproveShop/' + shop_id);
            }
        }
    }
})(angular);