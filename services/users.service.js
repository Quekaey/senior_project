angular.module('tps').factory('UserService', userService);

function userService(CandidateUserService){
    var userService = {};

    userService.getAll = CandidateUserService.getAllUsers;
    userService.getByUsername = CandidateUserService.getUserByUserName;
    userService.getById = CandidateUserService.getUserById;
    userService.create = CandidateUserService.createUser;
    userService.addUserEntityToCandidate = CandidateUserService.addCandidateEntityToUser;
    userService.modifyUserCandidate = CandidateUserService.modifyUserCandidate;

    return userService;
}