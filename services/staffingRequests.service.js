angular.module('tps').factory('StaffingRequestsService', staffingRequestsService);

function staffingRequestsService(StaffingRequestsConstant, HiringCompaniesService, $rootScope){
    var staffingRequestService = {};

    staffingRequestService.getAll = getAll;
    staffingRequestService.getById = getById;
    staffingRequestService.create = create;
    staffingRequestService.deleteRequest = deleteRequest;

    var staffingRequests = StaffingRequestsConstant.staffingRequests;

    function getAll(){
        return staffingRequests;
    }

    function getById(id){
        for(var i = 0; i < staffingRequests.length; i++){
            if(id.toString() === staffingRequests[i].id.toString()){
                var request = staffingRequests[i];
                var sesh = $rootScope.session;

                if(sesh.type === 'admin' || sesh.type === 'staffing'
                    || request.company.id.toString() === sesh.hiringCompany.id.toString()){
                    return request
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    function create(companyObj, hiringUserObj, skillKeywordsArr, notesArr, positionName, openPositions){
        var id = 1000;

        for(var i = 0; i < staffingRequests.length; i++){
            id = Math.max(id, staffingRequests[i].id + 1);
        }

        var staffingRequest = {
            id: id,
            company: companyObj,
            positionName: positionName,
            hiringUser: hiringUserObj,
            active: true,
            skillKeywords: skillKeywordsArr,
            openPositions: openPositions,
            notes: notesArr,
            created: new Date()
        };

        staffingRequests.push(staffingRequest);

        HiringCompaniesService.addStaffingRequest(hiringUserObj.hiringCompany.id, staffingRequest);
    }

    function deleteRequest(requestObj){
        var index = staffingRequests.indexOf(requestObj);

        if(index > -1){
            staffingRequests.splice(index, 1);
        }
    }

    return staffingRequestService;
}