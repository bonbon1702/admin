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

    }
})(angular);
