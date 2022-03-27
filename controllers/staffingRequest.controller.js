angular.module('tps').controller('StaffingRequest', staffingRequestController);

function staffingRequestController($scope, $location, ROUTES, staffingRequestId, StaffingRequestsService){
    $scope.notFound = false;

    if($scope.session.type !== 'candidate'){
        $scope.staffingRequest = StaffingRequestsService.getById(staffingRequestId);

        if($scope.staffingRequest){
            $scope.title = 'Staffing Request for ' + $scope.staffingRequest.company.name;
        } else {
            $scope.notFound = true;
        }
    }

    $scope.goTo = goTo;
    $scope.deleteRequest = deleteRequest;

    function goTo(path){
        $location.path(path);
    }

    function deleteRequest(){
        StaffingRequestsService.deleteRequest($scope.staffingRequest);

        $location.path(ROUTES.STAFFING_REQUESTS_LIST);
    }
}