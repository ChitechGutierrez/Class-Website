// home controller
demoApp.controller('HomeController', function ($scope) {
    $scope.header = "Mr. Gutierrez's Website.";
    
    
});

// about controller
demoApp.controller('AboutController', function ($scope) {
    $scope.header = "About";
});

// post controller
demoApp.controller('PostController', function ($scope) {

    $scope.header = "Posts";

    // define posts json
    $scope.posts =  [{
        "id": "1",
        "title": "Vestibulum Id Ligular",
        "image": "http://placehold.it/100x100",
        "author": "bob",
        "intro": "Aenean lacinia bibendum nulla sed consectetur",
        "extended": "STUFF."
    },{
        "id": "2",
        "title": "Porta Felis Euismod Semper",
        "image": "http://placehold.it/100x100",
        "author": "tom",
        "intro": "Integer facilisis aliquet leo",
        "extended": "STUFF."
    },{
        "id": "3",
        "title": "Tellus Vehicula Mattis Aenean",
        "image": "http://placehold.it/100x100",
        "author": "jill",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "STUFF."
    },{
        "id": "4",
        "title": "Vulputate Ornare Justo",
        "image": "http://placehold.it/100x100",
        "author": "marge",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "STUFF."
    },{
        "id": "5",
        "title": "Malesuada Vulputate Dolor Commodo",
        "image": "http://placehold.it/100x100",
        "author": "david",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "STUFF."
    }];


});


// // Freshman controller
// demoApp.controller('ECSController', function ($scope) {
//     $scope.header = "Exploring Computer Science Class";
// });

// Sophomore controller
demoApp.controller('SophomoreController', function ($scope) {
    $scope.header = "Sophomore Tech";
    $scope.description = "The Quarter long Logic Branch of the Sophomore Tech class centers around the introduction of computer logic and computer science principles. We will learn basic programming using Processing (www.processing.org), a Java library centered around visual output. We also will explore current events in technology and how they affect the students.";
    
    googleSpreadsheetAgenda("1HrBnmIoTfrhv6VjZJXf6j607XEbt4BvO7nv97GR_lng");
});

// MMA controller
demoApp.controller('MMA3Controller', function ($scope) {
    $scope.header = "MultiMedia Arts III";
    $scope.description = "MultiMedia Arts III (MMA3) is a senior level tech class that focuses on the different parts that go into media projects like animated movies or video games. The core of this class is centered around creating the different art pieces involved with creating a video game. We will learn about Sprite Animation, 3D Modeling and animation, and audio, then putting them together into a finished video game product using the Unity gaming engine. NOTE: This is NOT a game development course, so we will not be focusing on programming.  However, we will be doing some simple programming as a means to assemble the multimedia video game project into a cohesive unit. We also will explore current events in technology and how they affect the students.";
    
     googleSpreadsheetAgenda("1rhDVdhXgyl9pm1I77ft1BGLG275aPPDpbSMhr-yBX68");
});

// Projects controller
demoApp.controller('ProjectsController', function ($scope) {
    $scope.header = "Past Projects";
});

    // butterflyEffect controller
    demoApp.controller('butterflyEffectController', function ($scope) {
        $scope.header = "The Butterfly Effect";
    });
    
    // pixelatedLife controller
    demoApp.controller('pixelatedLifeController', function ($scope) {
        $scope.header = "Pixelated Live";
    });
    
    // portfolioProject controller
    demoApp.controller('portfolioProjectController', function ($scope) {
        $scope.header = "Portfolio Project";
    });
    
    // backToTheirFutures controller
    demoApp.controller('backToTheirFuturesController', function ($scope) {
        $scope.header = "backToTheirFutures Project";
    });


// Resources controller
demoApp.controller('ResourcesController', function ($scope) {
    $scope.header = "Resources";
     $scope.description = "Here you will find resources that can be used by virtually any student in the school, as well as for teachers. These are useful tools I have found, or they are resources that I created for my students.";
});


//Sets the Active Link for the page
function NavController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
};

