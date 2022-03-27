angular.module('tps', ['ngRoute', 'tps.ROUTES'])

    .run(function(SessionService){
        var credential = {
            id: 1000,
            username: 'andyadmin',
            firstName: 'Andy',
            lastName: 'Admin',
            type: 'admin',
            hiringCompany: null,
            emailAddress: 'andy@tpsstaffing.com'
        };

        SessionService.create(credential);
    })

    .config(function($routeProvider, ROUTES){

        $routeProvider
            .when(ROUTES.HOME, {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when(ROUTES.CANDIDATES_CREATE, {
                controller: 'CandidateCreateCtrl',
                templateUrl: 'views/candidateCreate.html'
            })
            .when(ROUTES.CANDIDATES_DETAIL, {
                controller: 'CandidateCtrl',
                templateUrl: 'views/candidate.html',
                resolve: {
                    candidateId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.CANDIDATES_LIST, {
                controller: 'CandidatesCtrl',
                templateUrl: 'views/candidates.html'
            })
            .when(ROUTES.CANDIDATES_MODIFY, {
                controller: 'CandidateModifyCtrl',
                templateUrl: 'views/candidateProfile.html',
                resolve: {
                    candidateId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.CANDIDATE_RECOMMENDATIONS, {
                controller: 'CandidateRecommendationsCtrl',
                templateUrl: 'views/candidateRecommendations.html'
            })
            .when(ROUTES.CANDIDATES_RECOMMENDATION_DETAIL, {
                controller: 'CandidateRecommendationDetailCtrl',
                templateUrl: 'views/candidateRecommendationDetail.html',
                resolve: {
                    recommendationId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.CANDIDATE_UPDATE_INFO, {
                controller: 'CandidateProfileCtrl',
                templateUrl: 'views/candidateProfile.html'
            })
            .when(ROUTES.HIRING_COMPANIES_CREATE, {
                controller: 'HiringCompaniesCreateCtrl',
                templateUrl: 'views/hiringCompaniesCreate.html'
            })
            .when(ROUTES.HIRING_COMPANIES_LIST, {
                controller: 'HiringCompaniesCtrl',
                templateUrl: 'views/hiringCompanies.html'
            })
            .when(ROUTES.HIRING_COMPANIES_MODIFY, {
                controller: 'ModifyHiringCompanyCtrl',
                templateUrl: 'views/modifyHiringCompany.html',
                resolve: {
                    companyId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.HIRING_COMPANIES_DETAIL, {
                controller: 'HiringCompanyCtrl',
                templateUrl: 'views/hiringCompany.html',
                resolve: {
                    hiringCompanyId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.LOGIN, {
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .when(ROUTES.PROFILE, {
                controller: 'UpdateProfileCtrl',
                templateUrl: 'views/updateProfile.html'
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_LIST, {
                controller: 'StaffingRecommendations',
                templateUrl: 'views/staffingRecommendations.html'
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_DETAIL, {
                controller: 'StaffingRecommendationCtrl',
                templateUrl: 'views/staffingRecommendation.html',
                resolve: {
                    staffingRecommendationId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_CREATE_DETAIL, {
                controller: 'CreateStaffingRecommendationDetailCtrl',
                templateUrl: 'views/createStaffingRecommendationDetail.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.staffingRequestId;
                    }
                }
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_CREATE_LIST, {
                controller: 'CreateStaffingRecommendationCtrl',
                templateUrl: 'views/createStaffingRecommendation.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.staffingRequestId;
                    }
                }
            })
            .when(ROUTES.STAFFING_REQUESTS_LIST, {
                controller: 'StaffingRequests',
                templateUrl: 'views/staffingRequests.html'
            })
            .when(ROUTES.STAFFING_REQUESTS_DETAIL, {
                controller: 'StaffingRequest',
                templateUrl: 'views/staffingRequest.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.STAFFING_REQUESTS_CREATE, {
                controller: 'CreateStaffingRequestCtrl',
                templateUrl: 'views/createStaffingRequest.html'
            })
            .when(ROUTES.USER_CREATE, {
                controller: 'CreateUserCtrl',
                templateUrl: 'views/createUser.html'
            })
            .when(ROUTES.USER_DETAIL, {
                controller: 'UserCtrl',
                templateUrl: 'views/user.html',
                resolve: {
                    userId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.USER_LIST, {
                controller: 'UsersCtrl',
                templateUrl: 'views/users.html'
            })
            .when(ROUTES.USER_MODIFY, {
                controller: 'UserModifyCtrl',
                templateUrl: 'views/updateProfile.html',
                resolve: {
                    userId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.USER_SESSIONS, {
                controller: 'UserSessionsCtrl',
                templateUrl: 'views/userSessions.html'
            })
    });

angular.module('tps.ROUTES', [])
    .constant('ROUTES', {
        CANDIDATES_CREATE: '/candidates/create',
        CANDIDATES_DETAIL: '/candidate/:id',
        CANDIDATES_LIST: '/candidates',
        CANDIDATES_MODIFY: '/candidates/modify/:id',
        CANDIDATE_RECOMMENDATIONS: '/candidates/recommendations/',
        CANDIDATES_RECOMMENDATION_DETAIL: '/candidates/recommendation/:id',
        CANDIDATE_UPDATE_INFO: '/candidates/profile',
        HIRING_COMPANIES_CREATE: '/hiringcompanies/create',
        HIRING_COMPANIES_DETAIL: '/hiringcompany/:id',
        HIRING_COMPANIES_LIST: '/hiringcompanies',
        HIRING_COMPANIES_MODIFY: '/hiringcompanies/modify/:id',
        HOME: '/',
        LOGIN: '/login',
        PROFILE: '/profile',
        STAFFING_RECOMMENDATIONS_CREATE_DETAIL: '/staffing/recommendations/create/detail/:staffingRequestId',
        STAFFING_RECOMMENDATIONS_CREATE_LIST: '/staffing/recommendations/create/',
        STAFFING_RECOMMENDATIONS_DETAIL: '/staffing/recommendation/:id',
        STAFFING_RECOMMENDATIONS_LIST: '/staffing/recommendations/',
        STAFFING_REQUESTS_CREATE: '/staffing/requests/create/',
        STAFFING_REQUESTS_DETAIL: '/staffing/requests/detail/:id',
        STAFFING_REQUESTS_LIST: '/staffing/requests/',
        USER_DETAIL: '/user/:id',
        USER_LIST: '/users',
        USER_CREATE: '/users/create',
        USER_MODIFY: '/users/modify/:id',
        USER_SESSIONS: '/sessions/'
    });