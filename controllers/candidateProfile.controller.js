angular.module('tps').controller('CandidateProfileCtrl', candidateProfileController);

function candidateProfileController($scope, UserService, $location, ROUTES){
    $scope.title = "Candidate: Update Profile";

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.candidateUser = UserService.getById($scope.session.id);

    console.log($scope.candidateUser);

    function update(){
        UserService.modifyUserCandidate($scope.candidateUser.id, $scope.candidateUser.password,
            $scope.candidateUser.firstName, $scope.candidateUser.lastName,
            $scope.candidateUser.candidateInfo.skills, $scope.candidateUser.candidateInfo.status,
            $scope.candidateUser.candidateInfo.income, $scope.candidateUser.candidateInfo.location);

        $location.path(ROUTES.HOME);
    }

    function cancel(){
        $location.path(ROUTES.HOME);
    }
}