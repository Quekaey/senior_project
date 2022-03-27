angular.module('tps').factory('AuthenticationService', authenticationService);

function authenticationService(SessionService, UserService){
    var authenticationService = {};

    authenticationService.login = login;
    authenticationService.logout = logout;

    function login (username, password){
        SessionService.destroy();

        var user = UserService.getByUsername(username);

        if(user === null){
            return {
                success: false,
                response: 'User \'' + username + '\' does not exist!'
            }
        }

        if(user.password !== password){
            return {
                success: false,
                response: 'Password is incorrect.  Please try again.'
            }
        }

        SessionService.create(user);

        return {
            success: true,
            response: 'Congrats! You\'ve been logged in!'
        };
    }

    function logout(){
        SessionService.destroy();
    }

    return authenticationService;
}