angular.module('tps').controller('StaffingRequests', staffingRequestsController);

function staffingRequestsController($scope, $location, StaffingRequestsService, ROUTES){
    $scope.title = 'Staffing Requests';

    $scope.goTo = goTo;

    $scope.paths = ROUTES;
    $scope.staffingRequests = StaffingRequestsService.getAll();

    function goTo(path, replaceString, replacement){
        if(replacement){
            $location.path(path.replace(replaceString, replacement));
        } else {
            $location.path(path);
        }
    }
}