/**
 * Created by Nam on 19/4/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('manageShopController', manageShopController);

    manageShopController.$inject = ['$scope', 'manageShopService', 'loginService', '$filter'];

    function manageShopController($scope, manageShopService, loginService, $filter) {
        $scope.user = loginService.isLogin();

        $scope.logout = function () {
            loginService.logOut();
        };

        manageShopService.getAllShop()
            .success(function (data) {
                $scope.shopCollection = data.shops;

            }).error();

        $scope.approveShop = function (type, shop_id, index) {
            if (type == 0) {
                manageShopService.approveShop(shop_id)
                    .success(function () {
                        $scope.shopCollection[index].approve = 1;
                        for (var i = 0; i < $scope.shopCollection.length; i++) {
                            if (i != index) {
                                $scope.shopCollection[i].approve = 0;
                            }
                        }
                    }).error();
            } else {
                manageShopService.unApproveShop(shop_id)
                    .success(function () {
                        $scope.shopCollection[index].approve = 0;
                    }).error(function (data) {
                        console.log(data);
                    });
            }
        }
    }
})(angular);
