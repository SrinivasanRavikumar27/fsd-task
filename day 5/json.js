let Resume = {
ResumeName : 'SrinivasanRavikumar',
PersonalDetails : {
    Name : 'Srinivasan R',
    DateOfBirth : '27-04-1999',
    PlaceOfBirth : 'Chennai',
    Address : 'No 24, Erikarrai Street, Nerkundram, Chennai - 600107'
},
EducationalDetails : {
    SSC : {
        SchoolName : 'Velammal Matriculational Higher Secondary School',
        GroupName : 'General',
        Percentage : '83',
        PassedOut : '2014'
    },
    SSC : {
        SchoolName : 'Velammal Matriculational Higher Secondary School',
        GroupName : 'Computer Science',
        Percentage : '82',
        PassedOut : '2016'
    },
    UG : {
        SchoolName : 'Panimalar Engineering College',
        GroupName : 'B.tech - Informatiion technology',
        Percentage : '64',
        PassedOut : '2020'
    }
},
Skills : {
    Java : '40%',
    Html : '70%',
    Css : '50%',
    JavaScript : '40%',
    Postgresql : '60%'
},
ContactDetails : {
    EmailID : 'tosrinivasanravi@gmail.com',
    ContactNo : '9003293105'
}
}

var ResumeJson = JSON.stringify(Resume);

console.log(ResumeJson);
