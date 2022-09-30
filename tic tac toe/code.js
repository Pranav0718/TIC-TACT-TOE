var x = "x";
var o = "o";
var c = 2;
$(document).ready(function () {
  $(".square").click(function select_function() {
    var u = $(this).text();
    if (u == "x" || u == "o") {
      return;
    }
    if (c % 2 == 0) {
      $(this).text(o);
    } else {
      $(this).text(x);
    }
    c++;
    if (
      ($("#1").text() == "x" &&
        $("#2").text() == "x" &&
        $("#3").text() == "x") ||
      ($("#1").text() == "o" && $("#2").text() == "o" && $("#3").text() == "o")
    ) {
      alert($("#1").text() + " " + "win");
    } else if (
      ($("#4").text() == "x" && $("#5").text() == "x" && $("#6").text()) ==
        "x" ||
      ($("#4").text() == "o" && $("#5").text() == "o" && $("#6").text()) == "o"
    ) {
      alert($("#4").text() + " " + "win");
    } else if (
      ($("#7").text() == "x" && $("#8").text() == "x" && $("#9").text()) ==
        "x" ||
      ($("#7").text() == "o" && $("#8").text() == "o" && $("#9").text()) == "o"
    ) {
      alert($("#7").text() + " " + "win");
    } else if (
      ($("#1").text() == "x" && $("#4").text() == "x" && $("#7").text()) ==
        "x" ||
      ($("#1").text() == "o" && $("#4").text() == "o" && $("#7").text()) == "o"
    ) {
      alert($("#1").text() + " " + "win");
    } else if (
      ($("#2").text() == "x" && $("#5").text() == "x" && $("#8").text()) ==
        "x" ||
      ($("#2").text() == "o" && $("#5").text() == "o" && $("#8").text()) == "o"
    ) {
      alert($("#2").text() + " " + "win");
    } else if (
      ($("#3").text() == "x" && $("#6").text() == "x" && $("#9").text()) ==
        "x" ||
      ($("#3").text() == "o" && $("#6").text() == "o" && $("#9").text()) == "o"
    ) {
      alert($("#3").text() + " " + "win");
    } else if (
      ($("#1").text() == "x" && $("#5").text() == "x" && $("#9").text()) ==
        "x" ||
      ($("#1").text() == "o" && $("#5").text() == "o" && $("#9").text()) == "o"
    ) {
      alert($("#1").text() + " " + "win");
    } else if (
      ($("#7").text() == "x" && $("#5").text() == "x" && $("#3").text()) ==
        "x" ||
      ($("#7").text() == "o" && $("#5").text() == "o" && $("#3").text()) == "o"
    ) {
      alert($("#5").text() + " " + "win");
    } else {
      return;
    }
  });
  let animatetext = function () {
    let $elements = $(".tt-holder .tt");
    $(".ttt").tickerText($elements, 17, 2, 30, 1, 0.7, 3);
  };
  $(animatetext);
});
