angular.module('tps').controller('UserModifyCtrl', userModifyController);

function userModifyController(userId, $scope, $location, ROUTES, CandidateUserService){
    $scope.title = 'Modify User';
    $scope.modifyUser = true;

    $scope.user = CandidateUserService.getUserById(userId);

    $scope.update = modify;
    $scope.cancel = cancel;

    function modify(){
        var user = CandidateUserService.modifyUserOnly($scope.user.id, $scope.username, $scope.user.emailAddress,
            $scope.user.password, $scope.user.firstName, $scope.user.lastName);

        $location.path(ROUTES.USER_DETAIL.replace(":id", user.id))
    }

    function cancel(){
        $location.path(ROUTES.USER_LIST);
    }
}