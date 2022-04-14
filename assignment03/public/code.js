received_data = [];

function resetPage() {
  $("#unicornNameFilter").prop("checked", false);
  $("#unicornWeightFilter").prop("checked", false);
}

function filter_f() {
  name_ = "unchecked";
  weight_ = "unchecked";

  if ($("#unicornNameFilter").is(":checked")) {
    name_ = "checked";
  }
  if ($("#unicornWeightFilter").is(":checked")) {
    weight_ = "checked";
  }

  tmp = received_data.map((ob) => {
    result = [];
    if (name_ == "checked") result.push(ob["name"]);

    if (weight_ == "checked") result.push(ob["weight"]);

    return result;
  });
  $("#result").html("<pre>" + tmp + "</pre>");
}

function process_res(data) {
  received_data = JSON.parse(data);
  console.log(data);
  data = JSON.stringify(JSON.parse(data), null, 4);
  $("#result").html("<pre>" + data + "</pre>");
}

function findUnicornByWeight() {
  $.ajax({
    dataType: "jsonp",
    url: "http://localhost:5000/findUnicornByWeight/",
    type: "POST",
    data: {
      lowerWeight: $("#lowerWeight").val(),
      higherWeight: $("#higherWeight").val(),
    },
    success: process_res,
  });
  resetPage();
  $("#filters").show();
}
function findUnicornByFood() {
  apple = "unchecked";
  carrot = "unchecked";

  if ($("#apple").is(":checked")) {
    apple = "checked";
  }
  if ($("#carrot").is(":checked")) {
    carrot = "checked";
  }
  $.ajax({
    dataType: "jsonp",
    url: "http://localhost:5000/findUnicornByFood",
    type: "POST",
    data: {
      apple: apple,
      carrot: carrot,
    },
    success: process_res,
  });

  resetPage();
  $("#filters").show();
}

function findUnicornByName() {
  console.log($("#unicornName").val());
  $.ajax({
    dataType: "jsonp",
    url: "http://localhost:5000/findUnicornByName",
    type: "POST",
    data: {
      unicornName: $("#unicornName").val(),
    },
    success: process_res,
  });
  resetPage();
  $("#filters").show();
}
// // FjxDqKb1G3PUBT7wfl5djG3Nv8JlBuI81A9D6IoijucRookTMs1t7NAJKLzOH9Ya
// function getFetch() {
//   const choice = document.querySelector("searches").value;
//   const url = `https://pacific-meadow-77056.herokuapp.com/${choice}`;
//   fetch("unicorns.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#result").innterText = data.name;
//     });
// }

function setup() {
  $("#findUnicornByWeight").click(findUnicornByWeight);
  $("#findUnicornByFood").click(findUnicornByFood);
  $("#findUnicornByName").click(findUnicornByName);
  $("#filter").click(filter_f);
  $("#filters").hide();
}

jQuery(document).ready(setup);
