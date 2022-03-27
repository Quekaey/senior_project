angular.module('tps').controller('HiringCompaniesCtrl', hiringCompaniesController);

function hiringCompaniesController($scope, $location, HiringCompaniesService, ROUTES){
    $scope.title = 'Hiring Companies';

    $scope.goToCompany = goToCompany;
    $scope.createHiringCompany = createHiringCompany;

    $scope.hiringCompanies = HiringCompaniesService.getAll();

    function goToCompany(company){
        $location.path('/hiringcompany/' + company.id);
    }

    function createHiringCompany(){
        $location.path(ROUTES.HIRING_COMPANIES_CREATE)
    }
}