angular.module('tps').service('SessionService', sessionService);

function sessionService($rootScope){
    this.user = function(){
        //var derp = Object.assign({}, this);

        //console.log(derp);

        return 'yer mom';
    };

    this.create = function(user){
        this.id = user.id;
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.type = user.type;
        this.hiringCompany = user.hiringCompany;
        this.emailAddress = user.emailAddress;
        this.active = true;
        this.candidateInfo = user.candidateInfo;
        this.user = Object.assign({}, this);
        $rootScope.session = this;
    };

    this.destroy = function() {
        this.id = null;
        this.username = null;
        this.firstName = null;
        this.lastName = null;
        this.type = null;
        this.hiringCompany = null;
        this.emailAddress = null;
        this.active = false;
        $rootScope.session = null;
    };
}