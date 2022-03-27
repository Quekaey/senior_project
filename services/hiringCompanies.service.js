angular.module('tps').factory('HiringCompaniesService', hiringCompaniesService);

function hiringCompaniesService(HiringCompaniesConstants){
    var hiringCompaniesService = {};

    hiringCompaniesService.getAll = getAll;
    hiringCompaniesService.get = get;
    hiringCompaniesService.create = create;
    hiringCompaniesService.addUser = addUser;
    hiringCompaniesService.addStaffingRequest = addStaffingRequest;
    hiringCompaniesService.modifyHiringCompany = modifyHiringCompany;

    var hiringCompanies = HiringCompaniesConstants.hiringCompanies;

    function getAll(){
        return hiringCompanies;
    }

    function get(id){
        for(var i = 0; i < hiringCompanies.length; i++){
            if(id.toString() === hiringCompanies[i].id.toString()){
                return hiringCompanies[i];
            }
        }

        return null;
    }

    function create(name){
        var id = 1000;

        for(var i = 0; i < hiringCompanies.length; i++){
            id = Math.max(id, hiringCompanies[i].id + 1);
        }

        var hiringCompany = {
            id: id,
            name: name,
            users: [],
            notes: [],
            active: true,
            staffingRequests: []
        };

        hiringCompanies.push(hiringCompany);

        return hiringCompany;
    }

    function addUser(hiringCompanyId, userObject){
        var hiringCompany = get(hiringCompanyId);

        hiringCompany.users.push(userObject);
    }

    function addStaffingRequest(hiringCompanyId, staffingRequest){
        var hiringCompany = get(hiringCompanyId);

        hiringCompany.staffingRequests.push(staffingRequest);
    }

    function modifyHiringCompany(hiringCompanyId, name, status){
        var hiringCompany = get(hiringCompanyId);

        if(name && name !== ''){
            hiringCompany.name = name;
        }

        if(status === true || status === false){
            hiringCompany.active = status;
        }

        return hiringCompany;
    }

    return hiringCompaniesService;
}