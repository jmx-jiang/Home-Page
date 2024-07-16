$("#menu-bar").click(() => {
  $("main, header").css("opacity", "0.5");
  $("#menu-sidebar").css("display", "inline-block");
});

$("#x-bar").click(() => {
  $("#menu-sidebar").css("display", "none");
  $("main, header").css("opacity", "1");
});
