angular.module('tps').controller('CreateUserCtrl', createUserController);

function createUserController($scope, $location, UserService, CandidateUserService, HiringCompaniesService,
                                    ROUTES){
    $scope.title = 'Create User';

    $scope.goToUser = goToUser;
    $scope.create = create;
    $scope.assignHiringCompany = assignHiringCompany;

    $scope.users = CandidateUserService.getAllUsers();
    $scope.hiringCompanies = HiringCompaniesService.getAll();

    function goToUser(user){
        $location.path('/user/' + user.id);
    }

    function create(){
        UserService.create($scope.username, $scope.firstName,
            $scope.lastName, $scope.userType, $scope.hiringCompany,
            $scope.emailAddress, $scope.password);

        $location.path(ROUTES.USER_LIST);
    }

    function assignHiringCompany(hiringCompany){
        $scope.hiringCompany = hiringCompany;
    }
}