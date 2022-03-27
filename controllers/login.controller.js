angular.module('tps').controller('LoginCtrl', loginController);

function loginController($scope, $location, AuthenticationService){
    $scope.login = login;

    function login(username, password){
        var result = AuthenticationService.login(username, password);

        if(result.success){
            $location.path('/');
        } else {
            $scope.errorMessage = result.response;
        }
    }
}