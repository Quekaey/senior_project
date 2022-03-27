angular.module('tps').controller('CandidatesCtrl', candidatesController);

function candidatesController($scope, CandidateUserService, CandidateService, $location, ROUTES, $filter){
        $scope.title = 'Candidates';

        $scope.createCandidate = createCandidate;
        $scope.goToCandidate = goToCandidate;
        $scope.filterSkills = filterSkills;
        $scope.filterLocation = filterLocation;
        $scope.filterSalary = filterSalary;
        $scope.resetCandidates = resetCandidates;

        var baseCandidates = CandidateUserService.getAllCandidates();
        $scope.candidates = baseCandidates;

        function goToCandidate(candidate){
                $location.path('/candidate/' + candidate.id);
        }

        function createCandidate(){
                $location.path(ROUTES.CANDIDATES_CREATE)
        }

        function filter(searchTerm){
                $scope.candidates =
                searchTerm === '' ? baseCandidates :
                $filter('filter')($scope.candidates, searchTerm)
        }

        function filterSkills(searchTerm){
                $scope.candidates =
                    searchTerm === '' ? baseCandidates :
                        $filter('filter')(baseCandidates, {
                                skills: searchTerm
                        })
        }

        function filterLocation(searchTerm){
                $scope.candidates =
                    searchTerm === '' ? baseCandidates :
                        $filter('filter')(baseCandidates, {
                                location: searchTerm
                        })
        }

        function filterSalary(minSalary, maxSalary){
                console.log(minSalary);
                console.log(maxSalary);
                $scope.candidates = minSalary === '' && maxSalary === ''
                    ? baseCandidates
                    : $filter('filter')(baseCandidates, function(candidate){
                            if(minSalary && maxSalary){
                                if(candidate.income > minSalary && candidate.income < maxSalary){
                                        return candidate
                                }
                            } else if (minSalary && !maxSalary){
                                if (candidate.income > minSalary){
                                        return candidate;
                                }
                            } else if (!minSalary && maxSalary){
                                if(candidate.income < maxSalary){
                                        return candidate;
                                }
                            } else {
                                return false;
                            }
                })
        }

        function resetCandidates(){
                $scope.candidates = baseCandidates;
        }
}