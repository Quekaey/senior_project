angular.module('tps').controller('DashboardCtrl', dashboardController);

function dashboardController($scope, SessionService){
    $scope.session = SessionService;
}