angular.module('tps').controller('CandidateCreateCtrl', candidateCreateController);

function candidateCreateController($scope, CandidateService, $location, ROUTES){
    $scope.title = 'Candidates: Create';

    $scope.create = create;
    $scope.cancel = cancel;

    function create(){
        var candidate = CandidateService.create($scope.username, $scope.password, $scope.firstName,
            $scope.lastName, $scope.skills, $scope.status);
        $location.path(ROUTES.CANDIDATES_DETAIL.replace(':id', candidate.id))
    }

    function cancel(){
        $location.path(ROUTES.CANDIDATES_LIST);
    }
}