function triggerState() { 
  $('#mySidebar').css("width", sidebarState);
  $('#main').css("marginLeft", sidebarState);
  sidebarState = sidebarState == 0 ? 255 : 0;
}
$(function() {
  sidebarState = 250; 
  page = 1;
  end = pages.length;
  $('#page-1').addClass('carousel-item');
  $('#page-1').addClass('active');
  for (let i = 2; i <= end; i++){
    $('#page-' + i).addClass('carousel-item');
  }
  // Done with setup, display
  $("#loading").remove();
  $("#cont").removeAttr('hidden');
  myCarousel = document.querySelector('#myCarousel');
  carousel = new bootstrap.Carousel(myCarousel);
});

function goTo(p) {
  
  let idx = pages.indexOf(p);
  carousel.to(idx);
}