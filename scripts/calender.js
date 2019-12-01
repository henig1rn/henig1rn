
let currentMonth, monthName, year, firstDay, lastDay
let getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};
var toDay;
let findDay = function(){
    let date = new Date();
    currentMonth = date.getMonth();
    monthName = getMonthText(currentMonth);
    year = date.getFullYear();
    firstDay = new Date(year, currentMonth, 1);
    lastDay = getLastDayofMonth(currentMonth);
    toDay = date.getDate();
};

var getLastDayofMonth = function(currentMonth) {
    var date = new Date();
    var lastDayOfMonth = new Date(date.getFullYear(), currentMonth+1, 0);
    return lastDayOfMonth.getDate();
};


let populate = function(){
    var day = 0;
    var htmlString = "";
    
    for(i=0; i<7; i++) {  
        if(i >= firstDay.getDay()) {
            day++;
            htmlString += '<td>' + day + '</td>';
        } else {
            htmlString += '<td>' + ' ' + '</td>';
        }
    }
    htmlString += '</tr>';

    for(i=0; i<4; i++) {
        htmlString += '<tr>';
        for(j=0; j<7; j++) {
            if(day < lastDay) {
                day++;
                if(day == toDay){
                    htmlString += '<td>' + "Today" + '</td>';
                }else{
                    htmlString += '<td>' + day + '</td>';
                }
            } else {
               htmlString += '<td>' + ' ' + '</td>';
            }
        }
       htmlString += '</tr>';
    }
    $('calendar').innerHTML+=htmlString;
}

window.onload = function () {
    findDay()
    $("month_year").innerText = monthName + " " + year
    populate()
    
};