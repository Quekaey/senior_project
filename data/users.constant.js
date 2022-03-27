angular.module('tps').constant('UsersConstants', {
    users: [
        {
            id: 1000,
            username: 'andyadmin',
            firstName: 'Andy',
            lastName: 'Admin',
            type: 'admin',
            hiringCompany: null,
            emailAddress: 'andy@tpsstaffing.com',
            password: 'password1234'
        },
        {
            id: 1001,
            username: 'sallystaffer',
            firstName: 'Sally',
            lastName: 'Staffer',
            type: 'staffing',
            hiringCompany: null,
            emailAddress: 'sally@tpsstaffing.com',
            password: 'password1234'
        },
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
            id: 1004,
            username: 'christoperCandidate',
            firstName: 'Christopher',
            lastName: 'Candidate',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'ccandidate@gmail.com',
            password: 'password1234',
            candidateInfo: {
                id: 1003,
                skills: 'Copy-writing, Microsoft Word, Microsoft Excel',
                status: 'EmployedJobSearching',
                notes: [

                ],
                privateNotes: [
                    {
                        content: 'This is a very interesting candidate.  I believe he should be hired quickly.',
                        author: {
                            id: 1001,
                            username: 'sallystaffer',
                            firstName: 'Sally',
                            lastName: 'Staffer',
                            type: 'staffing',
                            hiringCompany: null,
                            emailAddress: 'sally@tpsstaffing.com',
                            password: 'password1234'
                        },
                        created: new Date(2016, 7, 29, 11, 17, 11, 13)
                    }
                ],
                recommendations: [

                ],
                user: {
                    id: 1004,
                    username: 'christoperCandidate',
                    firstName: 'Christopher',
                    lastName: 'Candidate',
                    type: 'candidate',
                    hiringCompany: null,
                    emailAddress: 'ccandidate@gmail.com',
                    password: 'password1234'
                },
                income: 33000,
                location: 'Columbus, Ohio, United States'
            }
        },
        {
            id: 1005,
            username: 'michaeljordan',
            firstName: 'Michael',
            lastName: 'Jordan',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'michaelJordan@gmail.com',
            password: 'password1234',
            candidateInfo: {
                id: 1002,
                skills: 'Basketball, Dunking',
                status: 'EmployedJobSearching',
                notes: [],
                privateNotes: [

                ],
                recommendations: [

                ],
                user: {
                    id: 1005,
                    username: 'michaeljordan',
                    firstName: 'Michael',
                    lastName: 'Jordan',
                    type: 'candidate',
                    hiringCompany: null,
                    emailAddress: 'ccandidate@gmail.com',
                    password: 'password1234'
                },
                income: 230000,
                location: 'Charlotte, North Carolina, United States'
            }
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

                ],
                user: {
                    id: 1006,
                    username: 'elonmusk',
                    firstName: 'Elon',
                    lastName: 'Musk',
                    type: 'candidate',
                    hiringCompany: null,
                    emailAddress: 'elonMusk@teslamotors.com',
                    password: 'password1234'
                },
                income: 1000000,
                location: 'Huntington Beach, California, United States'
            }
        },
        {
            id: 1007,
            username: 'andysterks',
            firstName: 'Andy',
            lastName: 'Sterkowitz',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'andys@gmail.com',
            password: 'password1234',
            candidateInfo: {
                id: 1000,
                skills: 'C#, AngularJS, Javascript',
                status: 'UnemployedJobSearching',
                notes: [

                ],
                privateNotes: [
                    {
                        content: 'An awesome candidate!  He should get hired somewhere...',
                        author: {
                            id: 1001,
                            username: 'sallystaffer',
                            firstName: 'Sally',
                            lastName: 'Staffer',
                            type: 'staffing',
                            hiringCompany: null,
                            emailAddress: 'sally@tpsstaffing.com',
                            password: 'password1234'
                        },
                        created: new Date(2016, 8, 7, 11, 17, 11, 13)
                    }
                ],
                recommendations: [

                ],
                user: {
                    id: 1007,
                    username: 'andysterks',
                    firstName: 'Andy',
                    lastName: 'Sterkowitz',
                    type: 'candidate',
                    hiringCompany: null,
                    emailAddress: 'andys@gmail.com',
                    password: 'password1234',
                    candidateInfo: {
                        id: 1000,
                        skills: 'C#, AngularJS, Javascript',
                        status: 'UnemployedJobSearching',
                        notes: [

                        ],
                        privateNotes: [
                            {
                                content: 'An awesome candidate!  He should get hired somewhere...',
                                author: {
                                    id: 1001,
                                    username: 'sallystaffer',
                                    firstName: 'Sally',
                                    lastName: 'Staffer',
                                    type: 'staffing',
                                    hiringCompany: null,
                                    emailAddress: 'sally@tpsstaffing.com',
                                    password: 'password1234'
                                },
                                created: new Date(2016, 8, 7, 11, 17, 11, 13)
                            }
                        ],
                        recommendations: [

                        ]
                    }
                },
                income: 45000,
                location: 'Chicago, IL, United States'
            }
        }
    ]
});