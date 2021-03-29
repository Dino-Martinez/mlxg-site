$(document).ready(() => {
  console.log("Ready!");
  $("img").bind("contextmenu", function(e) {
    return false;
  });
});
const $animationElements = $(".scroll-animate");
const $window = $(window);
const checkIfInView = () => {
  let window_height = $window.height();
  let window_top_position = $window.scrollTop();
  let window_bottom_position = window_top_position + window_height;

  $.each($animationElements, function() {
    let $element = $(this);
    let element_height = $element.outerHeight();
    let element_top_position = $element.offset().top;
    let element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
};

$window.on("scroll resize", checkIfInView);
