angular.module('tps').controller('HiringCompaniesCreateCtrl', hiringCompanyCreateController);

function hiringCompanyCreateController($scope, $location, ROUTES, HiringCompaniesService){
    $scope.title = 'Hiring Company: Create';

    $scope.create = create;
    $scope.cancel = cancel;

    function create(){
        var hiringCompany = HiringCompaniesService.create($scope.name);

        $location.path(ROUTES.HIRING_COMPANIES_DETAIL.replace(':id', hiringCompany.id));
    }

    function cancel(){
        $location.path(ROUTES.HIRING_COMPANIES_LIST);
    }
}