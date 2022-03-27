angular.module('tps').controller('CreateStaffingRecommendationCtrl', createStaffingRecommendationController);

function createStaffingRecommendationController(staffingRequestId, $scope, $location, StaffingRequestsService, ROUTES){

    $scope.title = 'Create Staffing Recommendation : Select Staffing Request';

    $scope.staffingRequests = StaffingRequestsService.getAll();

    $scope.goTo = goTo;
    $scope.select = select;
    $scope.stopProp = stopProp;
    $scope.create = create;
    $scope.paths = ROUTES;

    function goTo(path){
        $location.path(path);
    }

    function select(staffingRequest){
        if(staffingRequest.selected){
            staffingRequest.selected = false;
            $scope.selectedStaffingRequest = false;
        } else {
            $scope.staffingRequests.forEach(deselect);
            staffingRequest.selected = true;
            $scope.selectedStaffingRequest = staffingRequest;
        }
    }

    function deselect(staffingRequest){
        staffingRequest.selected = false;
    }

    function stopProp(evt, candidate, viewDetail){
        evt.stopPropagation();
        if(viewDetail){
            $location.path('staffing/recommendations/create/candidate/' + candidate.id);
        } else if(candidate){
            //candidate.selected = !candidate.selected;
        }
    }

    function create(){
        $location.path(ROUTES.STAFFING_RECOMMENDATIONS_CREATE_DETAIL
            .replace(':staffingRequestId', $scope.selectedStaffingRequest.id));
    }
}