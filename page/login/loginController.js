/**
 * Created by nghia on 05/04/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', 'loginService','$location','$window'];

    function loginController($scope, loginService, $location,$window) {
        $scope.login = function(data){
            loginService.login({
                username: this.username,
                password: this.password
            }).success(function(data){
                if (data.user){
                    $scope.error = '';
                    $window.sessionStorage["user"] = JSON.stringify(data.user);
                    $location.path('/manageUser');
                } else {
                    $scope.error = "Incorrect Username/password, please check again! ";
                }
            }).error();
        }
    }
})(angular);