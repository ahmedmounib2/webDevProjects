//$("h1").css("color","red");

//$("h1").addClass("big-title margin-50");
//$('h1').removeClass("big-title");

$("h1").text("bye");

$("button").text("Don't click me");

$("button").html("<em>Hey</em>");

// changing attributes with jquery

console.log($("img").attr("src")); // gets the value of the attribue

$("a").attr("href", "https://www.yahoo.com"); // setting the href attribute to yahoo.com

// adding event listeners with jquery

$("h1").click(function () {
  $("h1").css("color", "green");
});

/* vanilla JS
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}*/

$("button").click(function () {
  //$("h1").hide(); //$("h1").show(); to show it back
  //$("h1").fadeToggle(); // we can also use toggle  / fadeToggle()  fadeOut() or fadeIn()
  //$("h1").slideToggle(); //slideUp() collapse up, slideDown() collapse down
  //$("h1").animate({ opacity: 0.5 }); // animate cannot be used with color but can be used with anything that have a numeric value
  $("h1")
    .slideUp()
    .slideDown()
    .animate({ margin: "20%" })
    .animate({ opacity: 0.5 });
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  //event listener for the document.
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

//$("h1").before("<button>New</button>"); create an html element before another element we picked
//$("h1").after("<button>New</button>"); create an html element after another element we picked
//$("h1").prepend("<button>New</button>"); add the element before the content of the element picked (just after the starting tag of element picked)
//$("h1").append("<button>New</button>"); add the element after the content of the element picked (before the end tag)
//$("button").remove(); removing elements
