angular.module('tps').controller('UsersCtrl', usersController);

function usersController($scope, $location, UserService, ROUTES){
    $scope.title = 'Users';

    $scope.goToUser = goToUser;
    $scope.createUser = createUser;

    $scope.users = UserService.getAll();
    console.log($scope.users);

    function goToUser(user){
        $location.path('/user/' + user.id);
    }

    function createUser(){
        $location.path(ROUTES.USER_CREATE);
    }
}