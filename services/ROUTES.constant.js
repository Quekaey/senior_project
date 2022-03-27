angular.module('tps').constant('ROUTES', {
    CANDIDATES_DETAIL: '/candidate/:id',
    CANDIDATES_LIST: '/candidates',
    HIRING_COMPANIES_DETAIL: '/hiringcompany/:id',
    HIRING_COMPANIES_LIST: '/hiringcompanies',
    HOME: '/',
    LOGIN: '/login',
    STAFFING_RECOMMENDATIONS_CREATE_DETAIL: '/staffing/recommendations/create/detail/:staffingRequestId',
    STAFFING_RECOMMENDATIONS_CREATE_LIST: '/staffing/recommendations/create/',
    STAFFING_RECOMMENDATIONS_DETAIL: '/staffing/recommendation/:id',
    STAFFING_RECOMMENDATIONS_LIST: '/staffing/recommendations/',
    STAFFING_REQUESTS_CREATE: '/staffing/requests/create/',
    STAFFING_REQUESTS_DETAIL: '/staffing/requests/detail/:id',
    STAFFING_REQUESTS_LIST: '/staffing/requests/',
    USER_CREATE: '/user/create',
    USER_DETAIL: '/user/:id',
    USER_LIST: '/users'
});