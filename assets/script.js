// Starting with the requirements 

//There is a place in the given html to target and put the current date and time. Need to use momentjs
$("#currentDay").text(moment().format('MMMM Do YYYY hh:mm:ss A'));

setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY hh:mm:ss A'));
}, 1000);

//Need array to store the array of Tasks
let taskList = ['', '', '', '', '', '', '', '', '','']

// Need to call the function to store the data inputs locally 
store();

//Need to make different the displays for past present and future, while also displaying the times--for loop?
for (let i = 0; i < taskList.length; i++){
    let workHours = moment({ hour: 8 + i })
    let currentHour = moment().hour();

    // Need to add times to the HTML from the for loop? 
    $('#time' + i).text(workHours.format('hA'));

    //Will need conditiionals for the current hour vs the past and future states
    if (workHours.hour() < currentHour) {
        $('#tasks' + i).addClass('past');
        $('#tasks' + i).attr("placeholder", "time expired");
        $('#tasks' + i).prev().css('color', 'gray');
    } else if (workHours.hour() > currentHour) {
        $('#tasks' + i).addClass('future');
        $('#tasks' + i).attr("placeholder", "Write down your meetings, tasks, or To Do lists here");
        $('#tasks' + i).prev().css('color', 'lightgreen');
    } else {
        $('#tasks' + i).addClass('present');
        $('#tasks' + i).prev().css('color', 'red');
    }

    $('#tasks' + i).val(taskList[i]);
};

//on click event for the save button (savBtn)
$('.saveBtn').on('click', function (event) {
    let index = event.target.value;

    //Need to assign the vale to the array because I will need to store it
    taskList[index] = $('#tasks' + index).val();

    //now I need to persist/store the data
    localStorage.setItem('taskList', JSON.stringify(taskList));

});

//Need the fucntion to store the data
function store() {
    let list = JSON.parse(localStorage.getItem('taskList'));
    if (list !== null) {
        taskList = list;
    } else {
        return list;
    }
};


/* ACCEPTANCE CRITERIA


    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
    got it on momment 
    DONE

    WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
    --Ideas on what to do--
    make it 9-5 with 9 divs that carry all the functionalty for JS to target and input with moment 

    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    --Ideas on what to do--
    CSS is there from the given. Need to use moment to show past present

    WHEN I click into a timeblock
    THEN I can enter an event
    --Ideas on what to do--
    textarea, use persist to store locally 

    WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
    --Ideas on what to do--
    on click event for the save button (savBtn)
    use persist to store locally 

    WHEN I refresh the page
    THEN the saved events persist
    --Ideas on what to do--
    persist
*/
