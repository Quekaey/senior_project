angular.module('tps').factory('StaffingRecommendationsService', staffingRecommendationsService);

function staffingRecommendationsService(StaffingRecommendationsConstant, $rootScope, CandidateUserService){
    var staffingRecommendationsService = {};

    staffingRecommendationsService.getAll = getAll;
    staffingRecommendationsService.getById = getById;
    staffingRecommendationsService.create = create;
    staffingRecommendationsService.getForCandidate = getForCandidate;
    staffingRecommendationsService.updateCandidateResponse = updateCandidateResponse;
    staffingRecommendationsService.deleteRecommendation = deleteRecommendation;

    var staffingRecommendations = StaffingRecommendationsConstant.staffingRecommendations;

    function getAll(){
        return staffingRecommendations;
    }

    function getById(id){
        for(var i = 0; i < staffingRecommendations.length; i++){
            if(id.toString() === staffingRecommendations[i].id.toString()){
                var recommendation = staffingRecommendations[i];

                /* TEST */

                recommendation.getCandidateStatusById = function(candidateId){
                    for(var k = 0; k < this.candidates.length; k++){
                        if(this.candidates[k].details.id.toString() === candidateId.toString()){
                            return this.candidates[k].candidateResponse;
                        }
                    }
                };

                /* */

                var session = $rootScope.session;

                /* TEST */
                for(var j = 0; j < recommendation.candidates.length; j++){
                    recommendation.candidates[j].details =
                        CandidateUserService.getCandidateById(recommendation.candidates[j].details.id);
                }

                 /*     */

                if((session.type === 'admin' || session.type === 'staffing' || session.type === 'candidate'
                    || recommendation.company.id.toString()
                    === session.hiringCompany.id.toString())){
                    return recommendation
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    function create(companyObj, staffingUserObj, candidatesArr, requestObj, notesArr){
        var id = 1000;

        for(var i = 0; i < staffingRecommendations.length; i++){
            id = Math.max(id, staffingRecommendations[i].id + 1);
        }

        var recommendedCandidates = [];

        for(var j = 0; j < candidatesArr.length; j++){
            recommendedCandidates.push({
                id: getId(),
                details: candidatesArr[j],
                candidateResponse: null,
                hiringCompanyResponse: null
            })
        }

        staffingRecommendations.push({
            id: id,
            active: true,
            company: companyObj,
            staffingUser: staffingUserObj,
            candidates: recommendedCandidates,
            request: requestObj,
            notes: notesArr,
            created: new Date()
        });
    }

    function getId(){
        var id = 9000;

        for(var i = 0; i < staffingRecommendations.length; i++){
            for(var j = 0; j < staffingRecommendations[i].candidates.length; j++){
                id = Math.max(id, staffingRecommendations[i].candidates[j].id + 1);
            }
        }

        return id;
    }

    function getForCandidate(candidateId){
        if(!candidateId) return [];

        var recommendations = [];

        for(var i = 0; i < staffingRecommendations.length; i++){
            for(var j = 0; j < staffingRecommendations[i].candidates.length; j++){
                if(staffingRecommendations[i].candidates[j].details.id.toString() === candidateId.toString()){
                    var recommendation = staffingRecommendations[i];

                    recommendation.myCurrentResponse = staffingRecommendations[i].candidates[j].candidateResponse;

                    recommendation.getCandidateStatusById = function(candidateId){
                        for(var k = 0; k < this.candidates.length; k++){
                            if(this.candidates[k].details.id.toString() === candidateId.toString()){
                                return this.candidates[k].candidateResponse;
                            }
                        }
                    };

                    recommendations.push(recommendation);
                }
            }
        }

        return recommendations;
    }

    function updateCandidateResponse(recommendationId, candidateRecommendationId, response){
        var recommendation = getById(recommendationId);

        for(var i = 0; i < recommendation.candidates.length; i++){
            if(recommendation.candidates[i].id === candidateRecommendationId){
                recommendation.candidates[i].candidateResponse = response;
            }
        }

        return recommendation;
    }

    function deleteRecommendation(recommendation){
        var index = staffingRecommendations.indexOf(recommendation);

        if(index > -1){
            staffingRecommendations.splice(index, 1);
        }
    }

    return staffingRecommendationsService;
}