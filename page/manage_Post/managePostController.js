/**
 * Created by Nam on 19/4/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('managePostController', managePostController);

    managePostController.$inject = ['$scope', 'managePostService', 'ngDialog', 'loginService', '$filter'];

    function managePostController($scope, managePostService, ngDialog, loginService, $filter) {
        $scope.postCollection=[];
        $scope.user = loginService.isLogin();

        $scope.logout = function () {
            loginService.logOut();
        };

        managePostService.getAllPost()
            .success(function (data) {
                $scope.postCollection = data.posts;
            }).error();

        $scope.deletePost= function(post_id,index,postCollection){
            ngDialog.open({
                template: 'page/manage_Shop/templates/confirmDeletePost.html',
                className: 'ngdialog-theme-plain',
                controller: ['$scope', 'managePostService', '$window', '$location', function ($scope, managePostService, $window, $location) {
                    $scope.close = function () {
                        ngDialog.close();
                    };

                    $scope.confirm = function () {
                        ngDialog.close();
                        managePostService.deletePost(post_id)
                            .success(function () {
                                postCollection.splice(index,1);
                            })
                            .error(function (data) {
                            });
                    }
                }]
            });
        };

    }
})(angular);
