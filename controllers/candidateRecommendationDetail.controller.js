angular.module('tps').controller('CandidateRecommendationDetailCtrl', candidatesRecommendationDetailController);

function candidatesRecommendationDetailController(recommendationId, $scope, $location, ROUTES, StaffingRecommendationsService){
    $scope.title = "Job Recommendation Details";

    $scope.update = update;
    $scope.cancel = cancel;

    if($scope.session.type === 'candidate'){
        $scope.recommendation = StaffingRecommendationsService.getById(recommendationId);
        $scope.response = $scope.recommendation.getCandidateStatusById($scope.session.candidateInfo.id);
        console.log($scope.recommendation);
        console.log($scope.response);
    }

    function update(){
        var candidateRecommendationId;

        for(var i = 0; i < $scope.recommendation.candidates.length; i++){
            if($scope.recommendation.candidates[i].details.id.toString() === $scope.session.candidateInfo.id.toString()){
                candidateRecommendationId = $scope.recommendation.candidates[i].id;
            }
        }

        StaffingRecommendationsService.updateCandidateResponse($scope.recommendation.id, candidateRecommendationId, $scope.response)

        $location.path(ROUTES.CANDIDATE_RECOMMENDATIONS);
    }

    function cancel(){
        $location.path(ROUTES.CANDIDATE_RECOMMENDATIONS);
    }
}