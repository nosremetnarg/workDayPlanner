// var tasks = {};

// var createTask = function(taskText) {

// }

// display current time
// var currentTime = moment().local().format("dddd, MMMM Do YYYY, h:mm a");
// console.log(currentTime);
// let now = new Date();
// console.log(now);
// $('.lead')("change", "<p>");
const currentDay = document.getElementById('currentDay');

// task textarea  clicked
$('.task-input').on('click', function() {
    var text = $(this)
    .text()
    .trim();
    console.log(this + "text area")
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    
});
// save button clicked
$('.button').on('click', function() {
    var text = $(this)
    .text()
    .trim();
    console.log(this + "button")
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    
});

// draggable
$(function() {
    $(".middle").draggable();
    $(".middle").droppable({
        drop: function(event, ui) {
            $(this)
            .addClass("ui-state-highlight")
            .find("")
        }
    })
});

// updateTime
function updateTime () {
    const now = moment();
    const humanReadable = now.local().format("dddd, MMMM Do YYYY, h:mm A");
    console.log(humanReadable);
    currentDay.textContent = humanReadable;
}
setInterval (updateTime, 60000);
updateTime();