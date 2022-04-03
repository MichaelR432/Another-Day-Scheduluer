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

    // set schedule text blocks

    let textBlock = $('<textarea>');
    textBlock.addClass('description col-8' + userHours[i-9]);

    // assigning block colors based on time sets
    if (i < userHours) {
        textBlock.addClass('pass');
    }

    if (i === userHours) {
        textBlock.addClass('present');
    }

    if (i > userHours) {
        textBlock.addClass('future');
    }

    row.append(textBlock);


    // setting save button to dom and appending content to page

    let buttonBlock = $('<div>');
    buttonBlock.addClass('saveBtn col');
    buttonBlock.append("<i class=\"far fa-save " + userHours[i-9] + "\"></i>")
    row.append(buttonBlock);

    // pulling local storage and passing through array

    let classIcon = textBlock.attr('class').split('') [2];
    let tasks = localStorage.getItem(classIcon);
    textBlock.text(tasks);
}