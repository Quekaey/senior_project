angular.module('tps').controller('NavigationController', navigationController);

function navigationController($scope, $location, $route, ROUTES, SessionService, AuthenticationService){
    $scope.debug = 'Hello World!';

    $scope.goTo = goTo;
    $scope.pathIsActive = pathIsActive;
    $scope.loginAsAdmin = loginAsAdmin;
    $scope.loginAsStaffUser = loginAsStaffUser;
    $scope.loginAsHiringUser = loginAsHiringUser;
    $scope.loginAsCandidateUser = loginAsCandidateUser;
    $scope.logout = logout;

    $scope.paths = ROUTES;
    this.paths = ROUTES;
    $scope.session = SessionService;

    function goTo(path){
        console.log(path);
        $location.path(path);
    }

    function pathIsActive(path){
        return path === $location.path();
    }

    function loginAsAdmin(){
        AuthenticationService.login('andyadmin', 'password1234');
        $route.reload();
    }

    function loginAsStaffUser(){
        AuthenticationService.login('sallystaffer', 'password1234');
        $route.reload();
    }

    function loginAsHiringUser(){
        AuthenticationService.login('stephenspacex', 'password1234');
        $route.reload();
    }

    function loginAsCandidateUser(){
        AuthenticationService.login('christoperCandidate', 'password1234');
        $route.reload();
    }

    function logout(){
        $scope.session.destroy();
        $location.path($scope.paths.LOGIN);
    }
}