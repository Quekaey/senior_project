angular.module('tps').controller('HiringCompanyCtrl', hiringCompanyController);

function hiringCompanyController($scope, $location, ROUTES, hiringCompanyId, HiringCompaniesService){
    $scope.hiringCompany = HiringCompaniesService.get(hiringCompanyId);

    $scope.title = 'Hiring Company: ' + $scope.hiringCompany.name;

    $scope.goTo = goTo;
    $scope.modifyHiringCompany = modifyHiringCompany;

    function goTo(path){
        $location.path(path);
    }

    function modifyHiringCompany(){
        $location.path(ROUTES.HIRING_COMPANIES_MODIFY.replace(":id", hiringCompanyId));
    }
}