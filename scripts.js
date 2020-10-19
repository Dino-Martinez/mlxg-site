let fadeList = [];
let lpanimated = false;
$(document).ready(() => {
  console.log("Ready!");
  fadeList = $('.fade');
});

$(document).scroll(() => {
  const scrollY = $(document).scrollTop();
  const pageHeight = $(window).height();
  
  // fade in elements which have the fade classname
  fadeList.each(function() {
    const yPos = $(this).offset().top;
    const height = $(this).height();
    const distance = (yPos + height + 150) - (scrollY + pageHeight);
    const opacity = 1 - (distance/200);
    console.log(distance + " : " + (scrollY + pageHeight) + " : " + yPos + " : ");
    $(this).css('opacity', opacity);
  });
  
  // animate background for landing page info section
  const lpy = $('#landing-page-info').offset().top;
  if(scrollY + pageHeight - 250 > lpy && !lpanimated) {
    $('#landing-page-info').css('background-position', '100% 0%');
  } else {
    $('#landing-page-info').css('background-position', '0% 0%');
  }
});
