angular.module('tps').controller('UserSessionsCtrl', userSessionsController);

function userSessionsController($scope){
    $scope.title = 'Current User Sessions';

    $scope.suspend = suspend;

    function suspend(userSession){
        var index = $scope.sessions.indexOf(userSession);
        if(index > -1){
            $scope.sessions.splice(index, 1);
        }
    }

    $scope.sessions = [
        {
            id: 1002,
            username: 'henryhiring',
            firstName: 'Henry',
            lastName: 'Hiring',
            type: 'hiring',
            hiringCompany: {
                id: 1000,
                name: 'ACME Inc.',
                users: [
                    {
                        id: 1002,
                        username: 'henryhiring',
                        firstName: 'Henry',
                        lastName: 'Hiring',
                        type: 'hiring',
                        emailAddress: 'henry@acmeinc.com',
                        password: 'password1234'
                    }
                ],
                notes: [],
                active: true
            },
            emailAddress: 'henry@acmeinc.com',
            password: 'password1234'
        },
        {
            id: 1003,
            username: 'stephenspacex',
            firstName: 'Stephen',
            lastName: 'SpaceX',
            type: 'hiring',
            hiringCompany: {
                id: 1001,
                name: 'SpaceX',
                users: [
                    {
                        id: 1003,
                        username: 'stephenspacex',
                        firstName: 'Stephen',
                        lastName: 'SpaceX',
                        type: 'hiring',
                        emailAddress: 'stephen@spacex.com',
                        password: 'password1234'
                    }
                ],
                notes: [],
                active: true
            },
            emailAddress: 'stephen@spacex.com',
            password: 'password1234'
        },
        {
            id: 1006,
            username: 'elonmusk',
            firstName: 'Elon',
            lastName: 'Musk',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'elonMusk@teslamotors.com',
            password: 'password1234',
            candidateInfo: {
                id: 1001,
                skills: 'Physics, Astrophysics, Rocket Science, Electric Cars',
                status: 'EmployedNotInterested',
                notes: [],
                privateNotes: [

                ],
                recommendations: [

                ]
            }
        }
    ];
}