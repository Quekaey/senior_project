angular.module('tps').controller('CandidateRecommendationsCtrl', candidatesRecommendationsController);

function candidatesRecommendationsController($scope, $location, ROUTES, StaffingRecommendationsService){
    $scope.title = 'Job Recommendations';

    $scope.seeDetails = seeDetails;

    console.log($scope.session.user);

    if($scope.session.type === 'candidate'){
        $scope.candidateRecommendations =
            StaffingRecommendationsService.getForCandidate($scope.session.user.candidateInfo.id);
    }

    function seeDetails(recommendation){
        $location.path(ROUTES.CANDIDATES_RECOMMENDATION_DETAIL.replace(":id", recommendation.id));
    }
}