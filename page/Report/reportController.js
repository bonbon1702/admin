/**
 * Created by Nam on 19/4/2015.
 */
/**
 * Created by Nam on 19/4/2015.
 */
(function (angular) {
    angular.module('adminApp')
        .controller('reportController', reportController);

    reportController.$inject = ['$scope', 'reportService', 'loginService', '$filter'];

    function reportController($scope, reportService, loginService, $filter) {
        $scope.user = loginService.isLogin();
        $scope.logoutClickStatus = false;

        $scope.logout = function () {
            loginService.logOut();
        };

        $scope.logoutClick = function () {
            if ($scope.logoutClickStatus == false) {
                $scope.logoutClickStatus = true;
            }
            else
                $scope.logoutClickStatus = false;
        };

        $scope.config = {
            title: 'Social network',
            tooltips: true,
            labels: false,
            mouseover: function () {
            },
            mouseout: function () {
            },
            click: function () {
            },
            legend: {
                display: true,
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

        $scope.configInteraction = {
            "labels": false,
            "title": "",
            "legend": {
                "display": true,
                "position": "right"
            },
            "innerRadius": 0,
            "lineLegend": "lineEnd"
        };

        reportService.getLikeInteraction()
            .success(function (data) {
                $scope.dataLike = {
                    series: [],
                    data: []
                };

                for (var i = 0; i < data.likeData.posts.length; i++) {
                    $scope.dataLike.series.push(data.likeData.posts[i]);
                }

                for (var ob1 in data.likeData.vector) {
                    var dataY = data.likeData.vector[ob1];
                    $scope.dataLike.data.push({
                        x: ob1,
                        y: dataY
                    });
                }


            }).error();

        reportService.getFavoriteInteraction()
            .success(function (data) {
                $scope.dataFavorite = {
                    series: [],
                    data: []
                };

                for (var i = 0; i < data.favoriteData.posts.length; i++) {
                    $scope.dataFavorite.series.push(data.favoriteData.posts[i]);
                }

                for (var ob1 in data.favoriteData.vector) {
                    var dataY = data.favoriteData.vector[ob1];
                    $scope.dataFavorite.data.push({
                        x: ob1,
                        y: dataY
                    });
                }


            }).error();

        reportService.getCommentInteraction()
            .success(function (data) {
                $scope.dataComment = {
                    series: [],
                    data: []
                };

                for (var i = 0; i < data.commentData.posts.length; i++) {
                    $scope.dataComment.series.push(data.commentData.posts[i]);
                }

                for (var ob1 in data.commentData.vector) {
                    var dataY = data.commentData.vector[ob1];
                    $scope.dataComment.data.push({
                        x: ob1,
                        y: dataY
                    });
                }


            }).error();


    }
})(angular);
