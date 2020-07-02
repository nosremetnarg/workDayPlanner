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

// task was clicked
$('.middle').on('click', function() {
    console.log(this);
    var text = $(this)
    .text()
    .trim();
    console.log(this)
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
});
function updateTime () {
    const now = moment();
    const humanReadable = now.local().format("dddd, MMMM Do YYYY, h:mm A");
    console.log(humanReadable);
    currentDay.textContent = humanReadable;
}
setInterval (updateTime, 1000);
updateTime();