// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.

$(function () {
  let todayEl = $("#currentDay");
  todayEl.text(dayjs().format("dddd, MMMM D, YYYY"));
  let $currentHr = dayjs().hour();
  let $timeBlockDiv;
  let $timeMarkDiv;

  for (var i = 9; i <= 18; i++) {
    if (i < $currentHr) {
      $timeBlockDiv = $("<div>", {
        id: "hour-" + i,
        class: "row time-block past",
      });
      console.log(i, "test");
    } else if (i === $currentHr) {
      $timeBlockDiv = $("<div>", {
        id: "hour-" + i,
        class: "row time-block present",
      });
    } else if (i > $currentHr) {
      $timeBlockDiv = $("<div>", {
        id: "hour-" + i,
        class: "row time-block future",
      });
    }
    $timeMarkDiv = $("<div>", {
      class: "col-2 col-md-1 hour text-center py-3",
    });

    $(".container-fluid").append($timeBlockDiv.append($timeMarkDiv));

    if (i < 12) {
      $timeMarkDiv.text(i + "AM");
    } else if (i === 12) {
      $timeMarkDiv.text(i + "PM");
    } else {
      $timeMarkDiv.text(i - 12 + "PM");
    }

    let $textAreaEl = $("<textarea>");
    $textAreaEl
      .attr("id", "textarea" + i)
      .attr("class", "col-8 col-md-10 description")
      .attr("rows", "3");
    $textAreaEl.text();

    let $buttonEl = $("<button>");
    $buttonEl
      .attr("id", "saveBtn" + i)
      .attr("class", "btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save");

    let $icon = $('<i class="fas fa-save" aria-hidden="true"></i>');
    $timeBlockDiv.append($textAreaEl);
    $timeBlockDiv.append($buttonEl);
    $buttonEl.append($icon);
  }
  // add event listener
  $(document).ready(function () {
    var textareas = $("textarea");
    var saveButtons = $("[id^=saveBtn]");

    // Load  saved data from local storage
    for (var i = 0; i < textareas.length; i++) {
      var textarea = textareas[i];
      var key = "textarea" + (i + 9);
      var savedData = localStorage.getItem(key);
      console.log(i, savedData);
      if (savedData) {
        $(textarea).val(savedData);
      }
    }

    // Save the data to local storage
    saveButtons.on("click", function () {
      var textareaId = $(this).prev().attr("id");
      var value = $(this).prev().val();
      localStorage.setItem(textareaId, value);
    });
  });
});
