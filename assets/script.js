// Starting with the requirements 

//There is a place in the given html to target and put the current date and time. Need to use momentjs
$("#currentDay").text(moment().format('MMMM Do YYYY hh:mm:ss A'));

setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY hh:mm:ss A'));
}, 1000);

//Need array to store the array of Tasks
//let taskList = []

// Need to call the function to store the data inputs locally 

/* ACCEPTANCE CRITERIA


    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
    --Ideas on what to do--


    WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
    --Ideas on what to do--


    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    --Ideas on what to do--


    WHEN I click into a timeblock
    THEN I can enter an event
    --Ideas on what to do--


    WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
    --Ideas on what to do--


    WHEN I refresh the page
    THEN the saved events persist
    --Ideas on what to do--

*/
