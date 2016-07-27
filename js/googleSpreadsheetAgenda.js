function googleSpreadsheetAgenda (spreadsheetID){
	var bellworkButton = `
	            <!-- Button trigger modal -->
	              <button type="button" class="btn btn-default bellworkButton" data-toggle="modal" data-target="#myModal">
	                Form
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
	     //var spreadsheetID = "16GandAlShHNss90FBMCjPLj8XuFVTBH8kwXgjkVNoUU";
	     
	     // Make sure it is public or set to Anyone with link can view 
	     var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
	    
	     $.getJSON(url, function(data) {
	     
	      var entry = data.feed.entry;
	     
	      $(entry).each(function(){
	          var date = '<div class="dailyPostBellringer"><h3 class="dailyPostDate">'+this.gsx$date.$t;
	          var dayType = ' <small class="muted">'+this.gsx$daytype.$t+'</small></h3>';
	          var bellringer = '<div><span class="dailyPostTitle" style="font-size:1.3em;">Bellwork: </span>' +this.gsx$bellringer.$t+ bellworkButton+'</div>';
	          var lessonObjective = '<p><span class="dailyPostTitle" style="font-size:1.3em;">Objective: </span></p><p>'+this.gsx$lessonobjective.$t+'</p>';
	          var studentGoal = '<p><span class="dailyPostTitle" style="font-size:1.3em;">Student Goal: </span>'+this.gsx$studentgoal.$t+'</p>';
	          
	          var dailyPostBellringer = date + dayType + bellringer + lessonObjective + studentGoal + '</div>';
	          
	          var agenda1 = '<div class="dailyPostAgenda"><h4 class="dailyPostTitle">Agenda: </h4><p>'+this.gsx$agenda1.$t+'</p>';
	          var agenda2 = '<p>'+this.gsx$agenda2.$t+'</p>';
	          var agenda3 = '<p>'+this.gsx$agenda3.$t+'</p>';
	          var agenda4 = '<p>'+this.gsx$agenda4.$t+'</p>';
	          var agenda5 = '<p>'+this.gsx$agenda5.$t+'</p>';
	          var agenda6 = '<p>'+this.gsx$agenda6.$t+'</p>';
	          var agenda7 = '<p>'+this.gsx$agenda7.$t+'</p>';
	          var agenda8 = '<p>'+this.gsx$agenda8.$t+'</p>';
	          var agenda9 = '<p>'+this.gsx$agenda9.$t+'</p>';
	          var homework = '<p><span class="dailyPostTitle" style="font-size:1.3em;">Homework: </span>'+this.gsx$homework.$t+'</p>';
	          
	          var dailyPostAgenda = agenda1+agenda2+agenda3+agenda4+agenda5+agenda6+agenda7+agenda8+agenda9+homework+'</div>';
	          
	        // Column names are name, age, etc.
	        $('.dailies').prepend('<div class="dailyPost">'+ dailyPostBellringer + dailyPostAgenda + '<hr><\/div>');
	      });
	     
	     });
}