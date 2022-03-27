angular.module('tps').controller('CreateStaffingRequestCtrl', createStaffingRequestController);

function createStaffingRequestController($rootScope, $scope, $location, CandidatesConstants,
                                         HiringCompaniesService, StaffingRequestsService, ROUTES){

    $scope.title = 'Create Staffing Request';

    $scope.candidates = CandidatesConstants.list;
    $scope.hiringCompanies = HiringCompaniesService.getAll();
    $scope.createdNotes = [];

    $scope.goTo = goTo;
    $scope.stopProp = stopProp;
    $scope.addNote = addNote;
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

    function addNote(content){
        $scope.createdNotes.push({
            content: content,
            author: $rootScope.session
        });
        $scope.pendingNote = '';
    }

    function create(){
        var hiringCompany = $scope.session.type === 'hiring'
            ? $scope.session.hiringCompany
            : JSON.parse($scope.selectedHiringCompany);

        StaffingRequestsService.create(hiringCompany,
            $rootScope.session,
            $scope.skillKeywords.split(','),
            $scope.createdNotes,
            $scope.positionName,
            $scope.openPositions);
        $location.path(ROUTES.STAFFING_REQUESTS_LIST);
    }
}