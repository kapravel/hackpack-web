function triggerState() {
  $('#mySidebar').css("width", sidebarState);
  $('#main').css("marginLeft", sidebarState);
  sidebarState = sidebarState == 0 ? 500 : 0;
}
$(function() {
  sidebarState = 0
  sidebar =  $('#mySidebar')
 sidebar.css("width", sidebarState);
  $('#main').css("marginLeft", sidebarState);
  
  $('h2').toArray().forEach( element => {
    sidebar.append('<a href="#' + element.id + '">'+ element.innerHTML +'</a>');
  });

  // Done with setup, display
  $("#loading").remove();
  $("#cont").removeAttr('hidden');

});

function goTo(p) {
  
  let idx = pages.indexOf(p);
  carousel.to(idx);
}