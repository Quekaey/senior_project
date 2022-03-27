angular.module('tps').controller('CandidateModifyCtrl', candidateModifyController);

function candidateModifyController(candidateId, $scope, $location, ROUTES, CandidateUserService){
    $scope.title = 'Modify Candidate';

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.candidateUser = CandidateUserService.getCandidateUser(candidateId);

    function update(){
        CandidateUserService.modifyUserCandidate($scope.candidateUser.id, $scope.candidateUser.password,
                    $scope.candidateUser.firstName, $scope.candidateUser.lastName, $scope.candidateUser.candidateInfo.skills,
                    $scope.candidateUser.candidateInfo.status,  $scope.candidateUser.candidateInfo.income,  $scope.candidateUser.candidateInfo.location);

        $location.path(ROUTES.CANDIDATES_DETAIL.replace(":id", candidateId));
    }

    function cancel(){
        $location.path(ROUTES.CANDIDATES_DETAIL.replace(":id", candidateId));
    }
}