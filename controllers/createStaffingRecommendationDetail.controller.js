angular.module('tps').controller('CreateStaffingRecommendationDetailCtrl', createStaffingRecommendationDetailController);

function createStaffingRecommendationDetailController(staffingRequestId, $scope, $location, StaffingRecommendationsService,
                                                      CandidatesConstants, StaffingRequestsService, $rootScope, ROUTES){

    $scope.title = 'Create Staffing Recommendation Details';

    $scope.staffingRequest = StaffingRequestsService.getById(staffingRequestId);
    console.log($scope.staffingRequest);

    $scope.candidates = CandidatesConstants.list;
    console.log($scope.candidates);

    $scope.goTo = goTo;
    $scope.stopProp = stopProp;
    $scope.create = create;

    function goTo(path){
        $location.path(path);
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
        var candidatesToAdd = [];

        for(var i = 0; i < $scope.candidates.length; i++){
            if($scope.candidates[i].selected){
                candidatesToAdd.push($scope.candidates[i]);
            }
        }

        StaffingRecommendationsService.create($scope.staffingRequest.company,
            $rootScope.session.user, candidatesToAdd, $scope.staffingRequest,
            []);

        $location.path(ROUTES.STAFFING_RECOMMENDATIONS_LIST);
    }
}