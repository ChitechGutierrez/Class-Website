//Date and Day Type script
var monthNames = [ "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12" ];
var dayNames= ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

var newDate = new Date();
newDate.setDate(newDate.getDate());  

var todayDay = dayNames[newDate.getDay()];
var todayDate = newDate.getDate();
var todayMonth = monthNames[newDate.getMonth()];
var todayYear = newDate.getFullYear();
var ScheduleCheck = (newDate.getMonth() + 1) + '/' + newDate.getDate();

$('.date').html(todayDay + " " + todayMonth + '.' + todayDate + '.' + todayYear);


//105 days of school left after Winter break
//No School Days for 2015-2016 School Year
if ( ScheduleCheck == '1/1'   // New Year's Day
		|| ScheduleCheck == '6/14'  // Flag Day
		|| ScheduleCheck == '7/4'   // Independence Day
		|| ScheduleCheck == '11/11' // Veterans Day
		|| ScheduleCheck == '12/25' // Christmas Day
		|| ScheduleCheck == '12/31' // New Years Day
		|| ScheduleCheck == '1/18' // MLK Day
		|| ScheduleCheck == '1/22' // PD Day
		|| ScheduleCheck == '2/12' // PD Day
		|| ScheduleCheck == '2/15' // ?
		|| ScheduleCheck == '3/11' // PD Day
		|| ScheduleCheck == '4/14' // PD Day
		|| ScheduleCheck == '4/15' // PD Day
		|| ScheduleCheck == '4/18' // Spring Break
		|| ScheduleCheck == '4/19' // Spring Break
		|| ScheduleCheck == '4/20' // Spring Break
		|| ScheduleCheck == '4/21' // Spring Break
		|| ScheduleCheck == '4/22' // Spring Break
		|| ScheduleCheck == '5/13' // PD Day
		|| ScheduleCheck == '5/30' // ?
		|| ScheduleCheck == '6/3' // PD Day
		|| ScheduleCheck == '6/20' // Summer Break
		|| ScheduleCheck == '6/21' // Summer Break
		|| ScheduleCheck == '6/22' // Summer Break
		|| ScheduleCheck == '6/23' // Summer Break
		|| ScheduleCheck == '6/24' // Summer Break
		|| ScheduleCheck == '6/27' // Summer Break
		|| ScheduleCheck == '6/28' // Summer Break
		|| ScheduleCheck == '6/29' // Summer Break
		|| ScheduleCheck == '6/30' // Summer Break
		
		){
  $('.dayType').html("No School");
}
//Summer Break Check
else if ( todayMonth == 'July' 
    || todayMonth == 'August'
    ){
  $('.dayType').html("No School: Summer Vacation");
}

// Modified Schedule
else if ( ScheduleCheck == '1/19'   // Exhibition
		|| ScheduleCheck == '1/20'   // Exhibition
		|| ScheduleCheck == '1/21'   // Exhibition
		){
  $('.dayType').html("Modified schedule");
} else if(newDate.getDay() == 1 || newDate.getDay() == 3){
  $('.dayType').html("A day");
} else if(newDate.getDay() == 2 || newDate.getDay() == 4){
  $('.dayType').html("B day");
} else if(newDate.getDay() == 5){
  $('.dayType').html("X day");
} else if(newDate.getDay() == 0 || newDate.getDay() == 6){
  $('.dayType').html("No School");
} 

// Force Navbar to recollapse when clicking a link
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
