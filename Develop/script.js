/// Here is the current day of the user
let time = moment().format("MMMM Do, YYYY");
$('#currentDay').text(time);

/// Setting current time of user

let currentTime = parseInt(moment().format('H'));

/// Setting up an array of user hours
let userHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

// For loop to set user time blocks

for (i = 9; i <= 17; i++) {

    let row = $('<div>');
    row.addClass("row time-block");
    $(".container").append(row);

    let timeBlock = $('<div>');
    timeBlock.addClass("hour col");

    let hourText = $('<h4>');
    hourText.text(userHours[i - 9]);
    timeBlock.append(hourText);

    row.append(timeBlock);

    // set schedule text blocks

    let textBlock = $('<textarea>');
    textBlock.addClass('col-8 description ' + userHours[i - 9]);

    // assigning block colors based on time sets
    if (i < currentTime) {
        textBlock.addClass('past');
    }

    if (i === currentTime) {
        textBlock.addClass('present');
    }

    if (i > currentTime) {
        textBlock.addClass('future');
    }

    row.append(textBlock);


    // setting save button to dom and appending content to page

    let buttonBlock = $('<div>');
    buttonBlock.addClass('saveBtn col');
    buttonBlock.append("<i class=\"far fa-save " + userHours[i-9] + "\"></i>");
    row.append(buttonBlock);

    // pulling local storage and passing through array

    let saveIcon = textBlock.attr('class').split('')[2];
    let tasks = localStorage.getItem(saveIcon);
    textBlock.text(tasks);
}

// sending tasks to local storage
$(document).on('click', '.far', function() {

    const saveIcon = $(this).attr('class').split('')[2];
    const textArea = $('textarea' + saveIcon);
    const tasksInput = textArea.val();

    let tasks = localStorage.setItem(saveIcon, tasksInput);
})