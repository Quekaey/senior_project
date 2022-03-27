angular.module('tps').controller('UpdateProfileCtrl', updateProfileController);

function updateProfileController($scope, $location, ROUTES, CandidateUserService, SessionService){
    $scope.title = 'Update Profile';
    $scope.modifyUser = false;

    $scope.user = CandidateUserService.getUserById($scope.session.id);

    $scope.update = update;
    $scope.cancel = cancel;

    function update(){
        var user = CandidateUserService.modifyUserOnly($scope.user.id, $scope.username, $scope.user.emailAddress,
            $scope.user.password, $scope.user.firstName, $scope.user.lastName);
        SessionService.destroy();
        SessionService.create(user);
        $location.path(ROUTES.HOME);
    }

    function cancel(){
        $location.path(ROUTES.HOME);
    }
}