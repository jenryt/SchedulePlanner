// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
//   let todayEl = $("#currentDay");
//   todayEl.text(dayjs().format("dddd, MMMM D, YYYY"));

//   // let beginHour = 9;
//   // let endHour = 18;
//   let $currentHr = dayjs().hour();

//   $(function createDivs() {
//     for (var i = 9; i <= 18; i++) {
//       let $timeBlockDiv;
//       let $timeMarkDiv;
//       // let $colorCode = $(".time-block");

//       $timeBlockDiv = $("<div>", {
//         id: "hour-" + i,
//         class: "row time-block",
//       });

//       $timeMarkDiv = $("<div>", {
//         class: "col-2 col-md-1 hour text-center py-3",
//       });

//       $(".container-fluid").append($timeBlockDiv.append($timeMarkDiv));

//       if (i < 12) {
//         $timeMarkDiv.text(i + "AM");
//       } else if (i === 12) {
//         $timeMarkDiv.text(i + "PM");
//       } else {
//         $timeMarkDiv.text(i - 12 + "PM");
//       }

//       if (i - 9 < $currentHr) {
//         console.log(i - 9, $currentHr);
//         console.log(i - 9 < $currentHr);
//         $(".time-block").addClass("past");
//         console.log(i - 9, "test");
//       } else if (i - 9 === $currentHr) {
//         console.log(i - 9, $currentHr);
//         $(".time-block").addClass("present");
//       } else if (i - 9 > $currentHr) {
//         console.log(i - 9, $currentHr);
//         $(".time-block").addClass("future");
//       }
//       let $textAreaEl = $("<textarea>");
//       $textAreaEl
//         .attr("class", "col-8 col-md-10 description")
//         .attr("rows", "3");

//       let $buttonEl = $("<button>");
//       $buttonEl
//         .attr("class", "btn saveBtn col-2 col-md-1")
//         .attr("aria-label", "save");

//       let $icon = $('<i class="fas fa-save" aria-hidden="true"></i>');
//       $timeBlockDiv.append($textAreaEl);
//       $timeBlockDiv.append($buttonEl);
//       $buttonEl.append($icon);

//       $icon.on("click", function () {
//         localStorage.setItem("input", "JSON.stringify($textAreaEl.value)");
//         console.log(localStorage.getItem("JSON.parse(input)"));
//       });
//     }
//   });
// });

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
    $textAreaEl.attr("class", "col-8 col-md-10 description").attr("rows", "3");
    $textAreaEl.text();

    let $buttonEl = $("<button>");
    $buttonEl
      .attr("class", "btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save");

    let $icon = $('<i class="fas fa-save" aria-hidden="true"></i>');
    $timeBlockDiv.append($textAreaEl);
    $timeBlockDiv.append($buttonEl);
    $buttonEl.append($icon);

    // add event listener

    // var planArray = [];
    // $(function () {
    //   $("$textAreaEl").each(function () {
    //     planArray.push(this.value);
    //   });
    // });
    let $plan = $("<textarea>").text();

    $textAreaEl.bind("input propertychange", function () {
      if (this.value.length) {
        $icon.on("click", function () {
          localStorage.setItem("input", "JSON.stringify($plan)");
        });
      }
    });

    $plan = localStorage.getItem("input");
  }
});
