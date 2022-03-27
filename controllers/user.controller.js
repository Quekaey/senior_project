angular.module('tps').controller('UserCtrl', userController);

function userController($scope, $location, userId, UserService, ROUTES){
    $scope.user = UserService.getById(userId);

    $scope.title = 'User: ' + $scope.user.username;

    $scope.goTo = goTo;
    $scope.modifyUser = modifyUser;

    function goTo(path){
        $location.path(path);
    }

    function modifyUser(){
        $location.path(ROUTES.USER_MODIFY.replace(':id', $scope.user.id));
    }
}