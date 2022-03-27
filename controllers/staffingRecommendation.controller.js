angular.module('tps').controller('StaffingRecommendationCtrl', staffingRecommendationController);

function staffingRecommendationController($scope, ROUTES, $location, staffingRecommendationId, StaffingRecommendationsService){
    $scope.path = ROUTES;
    $scope.notFound = false;

    if($scope.session.type !== 'candidate'){
        $scope.staffingRecommendation = StaffingRecommendationsService.getById(staffingRecommendationId);
        if(!$scope.staffingRecommendation){
            $scope.notFound = true;
        } else {
            $scope.title = 'Staffing Recommendation for ' + $scope.staffingRecommendation.company.name;
        }
    }

    $scope.deleteRecommendation = deleteRecommendation;
    $scope.goTo = goTo;

    function deleteRecommendation(){
        StaffingRecommendationsService.deleteRecommendation($scope.staffingRecommendation);

        $location.path(ROUTES.STAFFING_RECOMMENDATIONS_LIST);
    }

    function goTo(path){
        $location.path(path);
    }
}