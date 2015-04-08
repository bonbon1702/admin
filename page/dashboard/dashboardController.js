/**
 * Created by nghia on 05/04/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', 'dashboardService','$location','loginService','$filter'];

    function dashboardController($scope, dashboardService, $location,loginService,$filter) {
        $scope.user = loginService.isLogin();

        $scope.logout =  function(){
           loginService.logOut();
        };

        $scope.config = {
            title: 'Social network',
            tooltips: true,
            labels: false,
            mouseover: function() {},
            mouseout: function() {},
            click: function() {},
            legend: {
                display: true,
                //could be 'left, right'
                position: 'right'
            }
        };

        $scope.data = {
            series: ['Facebook', 'Google', 'Twitter'],
            data: [{
                x: "Facebook",
                y: [1000, 500, 0]
            }, {
                x: "Google",
                y: [300, 100, 100]
            }, {
                x: "Twitter",
                y: [51]
            }]
        };

        dashboardService.getAllUser()
            .success(function(data){
                $scope.userCollection = data.users;
            }).error();

        $scope.banUser = function(type,user_id, index){
            if (type == 0){
                dashboardService.banUser(user_id)
                    .success(function(){
                        $scope.userCollection[index].delete_flag = 1;
                    }).error(function(data){
                    });
            } else {
                dashboardService.unBanUser(user_id)
                    .success(function(){
                        $scope.userCollection[index].delete_flag = 0;
                    }).error();
            }

        };

        dashboardService.getAllShop()
            .success(function(data){
                $scope.shopCollection = data.shops;

            }).error();

        $scope.approveShop = function(type,shop_id,index){
            if (type == 0){
                dashboardService.approveShop(shop_id)
                    .success(function(data){
                        $scope.shopCollection[index].approve = 1;
                    }).error();
            }else {
                dashboardService.unApproveShop(shop_id)
                    .success(function(data){
                        $scope.shopCollection[index].approve = 0;
                    }).error(function(data){
                        console.log(data);
                    });
            }
        }


    }
})(angular);