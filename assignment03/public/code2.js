function process_res(data) {
  console.log(data);
  $("#result").html(JSON.stringify(data));
}
function findUnicornByName() {
  console.log("findUnicornByName()" + "got called!");
  console.log($("#unicornName").val());

  $.ajax({
    url: "http://localhost:5000/findUnicornByName",
    type: "POST",
    data: {
      unicornName: $("#unicornName").val(),
    },
    success: process_res,
  });
}

function findUnicornByFood() {
  carrotisChecked = "unchecked";
  appleisChecked = "unchecked";
  if ($("#carrot").is(":checked")) {
    carrotisChecked = "checked";

    if ($("#apple").is(":checked")) {
      appleisChecked = "checked";

      $.ajax({
        url: "http://localhost:5000/findUnicornByFood",
        type: "POST",
        data: {
          appleisChecked: appleisChecked,
          carrotisChecked: carrotisChecked,
        },
        success: process_res,
      });
    }
  }
}

function setup() {
  $("#findUnicornByName").click(findUnicornByName);
}

$(document).ready(setup);
