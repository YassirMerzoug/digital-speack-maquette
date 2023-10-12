$(document).ready(function () {
  $(".logo").animate({ top: "0" }, 2000);
  $(".title").animate({ top: "0" }, 2000);
  $(".p-home").animate({ top: "0" }, 2000);
  $(".cadre-img").animate({ top: "50%" }, 2000);

  $(".action-section").waypoint(function () {
    $(".info-action").animate({ left: "0" }, 2000);
    $(".pic-action").animate({ right: "0" }, 2000);
  });
  $(".conseil").waypoint(function () {
    $(".me").animate({ left: "17px" }, 1000);
    $(".conseil-img").animate({ right: "0" }, 2000);
    $(".hdi").animate({ right: "8px" }, 3000);
  });
});
