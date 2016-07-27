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
    
    var bellworkButton = `
            <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                Bellwork
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="myModalLabel">Bellwork</h4>
                    </div>
                    <div class="modal-body">
                      <iframe src="https://docs.google.com/a/chicagotechacademy.org/forms/d/e/1FAIpQLSfPOIA1POLV_zuJXayXmJV9AwFTh_tuF17zWAxNoW5FQ2YbQQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
    `;
    
     // ID of the Google Spreadsheet
     var spreadsheetID = "16GandAlShHNss90FBMCjPLj8XuFVTBH8kwXgjkVNoUU";
     
     // Make sure it is public or set to Anyone with link can view 
     var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
    
     $.getJSON(url, function(data) {
     
      var entry = data.feed.entry;
     
      $(entry).each(function(){
          var date = '<h3 class="title">'+this.gsx$date.$t;
          var dayType = ' <small class="muted">'+this.gsx$daytype.$t+'</small></h3>';
          var bellringer = '<span style="font-size:1.3em;">Bellwork: </span><p>'+this.gsx$bellringer.$t+'</p>';
          var agenda1 = '<h4>Agenda: </h4><p>'+this.gsx$agenda1.$t+'</p>';
          var agenda2 = '<p>'+this.gsx$agenda2.$t+'</p>';
          var agenda3 = '<p>'+this.gsx$agenda3.$t+'</p>';
          var agenda4 = '<p>'+this.gsx$agenda4.$t+'</p>';
          var agenda5 = '<p>'+this.gsx$agenda5.$t+'</p>';
          var agenda6 = '<p>'+this.gsx$agenda6.$t+'</p>';
          
        // Column names are name, age, etc.
        $('.MMMADailies').prepend(date + dayType + bellringer +bellworkButton+agenda1+agenda2+agenda3+agenda4+agenda5+agenda6+'<hr>');
      });
     
     });
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
};

