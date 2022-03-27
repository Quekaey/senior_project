angular.module('tps').constant('CandidatesConstants', {
    list: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
    ]
});