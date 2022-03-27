current_page_id = null;
results_array = null;
var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 0;

function paginate_menu() {
  $("#numbered_buttons_id").empty();
  last_page = Math.ceil(results_array.results.length / 3);
  for (i = 1; i <= last_page; i++) {
    x = `<button id="${i}" class="numbered_buttons_class"> ${i}</button> `;
    $("#numbered_buttons_id").append(x);
  }
}
function process_response(data) {
  results_array = data;
  for (i = 0; i < data.results.length; i++) {
    $("#results").append(data.results[i].original_title + "<br>");

    $("#results").append(data.results[i].overview + "<br>");
    x = data.results[i].poster_path;
    image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`;
    $("#results").append(image_html + "<br>");

    z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`;
    $("#results").append(z + "<br>");
  }
  paginate_menu();
}

function call_ajax() {
  w = $("#movie_name").val();
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
    type: "GET",
    success: process_response,
  });
  $("header").show();
}

function display_back_drop() {
  w = $(this).attr("id");
  console.log(
    `<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`
  );
  $("#right_div").html(
    `<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`
  );
}

function header_button() {
  x = $(this).attr("id");
  $("#results").html(`<h1> Display(${x}, Page size) </h1>`);
  current_page_id = Number(x);
  $("#prev").show();
  $("#next").show();
}

function setup() {
  $("#find_movie_info").click(call_ajax);
  // $("body").click(()=>{alert()});
  $("body").on("click", ".backdrop_button", display_back_drop);

  $("body").on("click", ".numbered_buttons_class", header_button);

  $("#prev").hide();

  $("#next").hide();

  $("header").hide();
}

jQuery(document).ready(setup);
