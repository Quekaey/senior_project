angular.module('tps').factory('CandidateService', candidateService);

function candidateService(CandidateUserService){
    var candidateService = {};

    candidateService.getAll = CandidateUserService.getAllCandidates;
    candidateService.getById = CandidateUserService.getCandidateById;
    candidateService.create = CandidateUserService.createCandidate;
    candidateService.addUserEntityToCandidate = CandidateUserService.addUserEntityToCandidate;

    return candidateService;
}