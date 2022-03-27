angular.module('tps').factory('CandidateUserService', candidateUserService);

function candidateUserService(CandidatesConstants, UsersConstants, HiringCompaniesService){
    var userCandidateService = {};

    // USER
    userCandidateService.getAllUsers = getAllUsers;
    userCandidateService.getUserByUserName = getUserByUsername;
    userCandidateService.getUserById = getUserById;
    userCandidateService.createUser = createUser;
    userCandidateService.getCandidateUser = getCandidateUser;
    userCandidateService.addCandidateEntityToUser = addCandidateEntityToUser;
    userCandidateService.modifyUserCandidate = modifyUserCandidate;
    userCandidateService.modifyUserOnly = modifyUserOnly;

    // CANDIDATE
    userCandidateService.getAllCandidates = getAllCandidates;
    userCandidateService.getCandidateById = getCandidateById;
    userCandidateService.createCandidate = createCandidate;
    userCandidateService.addUserEntityToCandidate = addUserEntityToCandidate;

    var users = UsersConstants.users;
    var candidates = CandidatesConstants.list;

    // USER FUNCTIONS
    function getAllUsers(){
        return users;
    }

    function getUserByUsername(username){
        for(var i = 0; i < users.length; i++){
            if(username.toLowerCase() === users[i].username.toLowerCase()){
                return users[i];
            }
        }

        return null;
    }

    function getUserById(id){
        for(var i = 0; i < users.length; i++){
            if(id.toString() === users[i].id.toString()){
                return users[i];
            }
        }

        return null;
    }

    function createUser(username, firstName, lastName,
                    type, hiringCompanyObj, emailAddress, password){
        var id = 1000;

        for(var i = 0; i < users.length; i++){
            id = Math.max(id, users[i].id + 1);
        }

        var user = {
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            type: type,
            hiringCompany: hiringCompanyObj,
            emailAddress: emailAddress,
            password: password,
            created: new Date()
        };

        users.push(user);

        if(hiringCompanyObj){
            HiringCompaniesService.addUser(hiringCompanyObj.id, user);
        }

        return user;
    }

    function getCandidateUser(candidateId){
        var candidate = getCandidateById(candidateId);

        var user = getUserById(candidate.user.id);
        candidate.user = user;
        user.candidateInfo = candidate;

        console.log(user);

        return user;
    }

    function addCandidateEntityToUser(id, candidate){
        user = getUserById(id);

        user.candidateInfo = candidate;
    }

    function modifyUserCandidate(userId, password, firstName, lastName, skills, status, income, location){
        console.log(candidates);
        var user = getUserById(userId);

        user.password = password;
        user.firstName = firstName;
        user.lastName = lastName;

        var candidate = getCandidateById(user.candidateInfo.id);

        candidate.skills = skills;
        candidate.status = status;
        candidate.income = income;
        candidate.location = location;

        user.candidateInfo = candidate;
        candidate.user = user;
    }

    function modifyUserOnly(userId, username, emailAddress, password, firstName, lastName){
        var user = getUserById(userId);

        if(username){
            user.username = username;
        }
        if(emailAddress){
            user.emailAddress = emailAddress;
        }
        if(password){
            user.password = password;
        }
        if(firstName){
            user.firstName = firstName;
        }
        if(lastName){
            user.lastName = lastName;
        }

        return user;
    }

    // CANDIDATE FUNCTIONS

    function getAllCandidates(){
        console.log(candidates);
        return candidates;
    }

    function getCandidateById(id){
        for(var i = 0; i < candidates.length; i++){
            if(id.toString() === candidates[i].id.toString()){
                return candidates[i];
            }
        }

        return null;
    }

    function createCandidate(username, password, firstName, lastName, skills, status, income, location){
        var id = 1000;

        for(var i = 0; i < candidates.length; i++){
            id = Math.max(id, candidates[i].id + 1);
        }

        var user = createUser(username, firstName, lastName, 'candidate', null,
            "default@candidate.tps.com", password);

        var candidate = {
            id: id,
            skills: skills,
            status: status,
            notes: [],
            privateNotes: [],
            recommendations: [],
            user: user,
            income: income ||  0,
            location: location || ''
        };

        addCandidateEntityToUser(user.id, candidate);

        candidates.push(candidate);

        return candidate;
    }

    function addUserEntityToCandidate(candidateId, user){
        candidate = getCandidateById(candidateId);

        candidate.user = user;
    }

    return userCandidateService;
}