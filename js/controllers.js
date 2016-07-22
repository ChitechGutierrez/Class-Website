// home controller
demoApp.controller('HomeController', function ($scope) {
    $scope.header = "Mr. Gutierrez's Website. Currently down for repairs.";
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
        "extended": "Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },{
        "id": "2",
        "title": "Porta Felis Euismod Semper",
        "image": "http://placehold.it/100x100",
        "author": "tom",
        "intro": "Integer facilisis aliquet leo",
        "extended": "Integer facilisis aliquet leo, non sodales nibh eleifend ac. Donec risus tellus, porttitor sit amet gravida non, ullamcorper in velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi."
    },{
        "id": "3",
        "title": "Tellus Vehicula Mattis Aenean",
        "image": "http://placehold.it/100x100",
        "author": "jill",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "Integer facilisis aliquet leo, non sodales nibh eleifend ac. Donec risus tellus, porttitor sit amet gravida non, ullamcorper in velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },{
        "id": "4",
        "title": "Vulputate Ornare Justo",
        "image": "http://placehold.it/100x100",
        "author": "marge",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "Integer facilisis aliquet leo, non sodales nibh eleifend ac. Donec risus tellus, porttitor sit amet gravida non, ullamcorper in velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },{
        "id": "5",
        "title": "Malesuada Vulputate Dolor Commodo",
        "image": "http://placehold.it/100x100",
        "author": "david",
        "intro": "klasjdflk ljdsfalk sdaf",
        "extended": "Integer facilisis aliquet leo, non sodales nibh eleifend ac. Donec risus tellus, porttitor sit amet gravida non, ullamcorper in velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi."
    }];


});


// Freshman controller
demoApp.controller('ECSController', function ($scope) {
    $scope.header = "Exploring Computer Science Class";
});

// Sophomore controller
demoApp.controller('SophomoreController', function ($scope) {
    $scope.header = "Sophomore Tech";
});

// MMA controller
demoApp.controller('MMAController', function ($scope) {
    $scope.header = "MultiMedia Arts";
});

// Game Design controller
demoApp.controller('GameDesignController', function ($scope) {
    $scope.header = "Game Development";
});

// Projects controller
demoApp.controller('ProjectsController', function ($scope) {
    $scope.header = "Past Projects";
});

// Resources controller
demoApp.controller('ResourcesController', function ($scope) {
    $scope.header = "Resources";
});


//Sets the Active Link for the page
function NavController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}
