// var tasks = {};

// var createTask = function(taskText) {

// }

// display current time
// var currentTime = moment().local().format("dddd, MMMM Do YYYY, h:mm a");
// console.log(currentTime);
// let now = new Date();
// console.log(now);
// $('.lead')("change", "<p>");
var currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");
var currentTimeInt = moment().hour();

var saveBtn = $('.btn');
$("#currentDay").text(currentTime);

// input data for each hour
$("#row9").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#row10").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
$("#row11").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
$("#row12").attr("data-time", moment("12:00pm", "h:mm a").format("HH"));
$("#row1").attr("data-time", moment("1:00pm", "h:mm a").format("HH"));
$("#row2").attr("data-time", moment("2:00pm", "h:mm a").format("HH"));
$("#row3").attr("data-time", moment("3:00pm", "h:mm a").format("HH"));
$("#row4").attr("data-time", moment("4:00pm", "h:mm a").format("HH"));
$("#row5").attr("data-time", moment("5:00pm", "h:mm a").format("HH"));

const currentDay = document.getElementById('currentDay');
const currentHour = document.getElementById('currentHour');

// var auditTime = function(updateTime) {
//     var time = $(updateTime).find("p").text().trim();
//     // convert moment object at 5:00pm
//     var workTime = moment(date, "L").set("hour")
// }
// task textarea  clicked
// $('.task-input').on('click', function() {
//     var text = $(this)
//     .text()
//     .trim();
//     console.log(this + "text area")
//     var textInput = $("<textarea>")
//     .addClass("form-control")
//     .val(text);
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
// });
// save button clicked
$('.btn').on('click', function () {
    var userInput = $(this).siblings("input").val().trim();
    console.log($(this).siblings("input").attr("id"));
    console.log(localStorage);

    var hour = $(this).siblings("input").attr("id");
    localStorage.setItem(hour, userInput);
})
// get localStorage
$("#row9").val(localStorage.getItem("row9"));
$("#row10").val(localStorage.getItem("row10"));
$("#row11").val(localStorage.getItem("row11"));
$("#row12").val(localStorage.getItem("row12"));
$("#row1").val(localStorage.getItem("row1"));
$("#row2").val(localStorage.getItem("row2"));
$("#row3").val(localStorage.getItem("row3"));
$("#row4").val(localStorage.getItem("row4"));
$("#row5").val(localStorage.getItem("row5"));

// // draggable DO NOT NEED DRAGGABLE ATTR IN THIS CHALLENGE
// $(function() {
//     $(".middle").draggable();
//     $(".middle").droppable({
//         drop: function(event, ui) {
//             $(this)
//             .addClass("ui-state-highlight")
//             .find("")
//         }
//     })
// });
for (var i = 1; i <= 12; i++) {
    var inputTime = $("#" + "row" + i).attr("data-time");
    var inputTimeInt = parseInt(inputTime);
    console.log(currentTimeInt);

    if (currentTimeInt === inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("present");
    }

    if (currentTimeInt > inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("past");
    }
    if (currentTimeInt > inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("future");
    }
}

// updateTime
function updateTime() {
    const now = moment();
    const humanReadable = now.local().format("dddd, MMMM Do YYYY, h:mm A");
    console.log(humanReadable);
    currentDay.textContent = humanReadable;
}
setInterval(updateTime, 60000);
updateTime();

function updateHour() {
    const nowHour = moment();
    const hourReadable = nowHour.local().format("h A");
    console.log(hourReadable + " current hour");
    currentHour.textContent = hourReadable;
}
setInterval(updateHour, 3600000);
updateHour();

console.log(localStorage);