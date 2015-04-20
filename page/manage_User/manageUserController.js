/**
 * Created by nghia on 05/04/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', 'manageUserService', '$location', 'loginService', '$filter'];

    function dashboardController($scope, manageUserService, $location, loginService, $filter) {
        $scope.user = loginService.isLogin();
        $scope.logoutClickStatus = false;

        $scope.logout = function () {
            loginService.logOut();
        };

        $scope.logoutClick = function () {
            if($scope.logoutClickStatus == false ){
                $scope.logoutClickStatus = true;
            }
            else
                $scope.logoutClickStatus = false;
        }

        manageUserService.getAllUser()
            .success(function (data) {
                $scope.userCollection = data.users;
            }).error();

        $scope.banUser = function (type, user_id, index) {
            if (type == 0) {
                manageUserService.banUser(user_id)
                    .success(function () {
                        $scope.userCollection[index].delete_flag = 1;
                    }).error(function (data) {
                    });
            } else {
                manageUserService.unBanUser(user_id)
                    .success(function () {
                        $scope.userCollection[index].delete_flag = 0;
                    }).error();
            }

        };


    }
})(angular);