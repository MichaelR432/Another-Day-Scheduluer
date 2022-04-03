/// Here is the current day of the user
let time = moment().format("MMMM Do, YYYY");
$('#currentDay').text(time);

/// Setting current time of user

let currentTime = moment().format("HH");

/// Setting up an array of user hours
let userHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// For loop to set user time blocks

for (i = 9; i <= 17; i++) {

    let row = $('div');
    row.addClass(" row time-block");
    $(".container").append(row);

    let timeBlock = $('div');
    timeBlock.addClass(" col hour ");

    let hourText = $('<h4>');
    hourText.text(userHours[i - 9]);
    timeBlock.append(hourText);

    row.append(timeBlock);

}