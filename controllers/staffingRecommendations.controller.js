angular.module('tps').controller('StaffingRecommendations', staffingRecommendationsController);

function staffingRecommendationsController($scope, $location, StaffingRecommendationsService){
    $scope.title = 'Staffing Recommendations';

    $scope.goTo = goTo;

    $scope.staffingRecommendations = StaffingRecommendationsService.getAll();

    function goTo(path){
        $location.path(path);
    }
}