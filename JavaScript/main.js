// Loader

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  // nav bar collapse on small screens when clicked outside nav bar

  jQuery(function(){
    $( '#hamburger-menu' ).click(function(){
       $('#sidebar-menu').toggleClass('expand');
       $('.overlay').toggleClass('open');            
    });  
    $('.overlay').click(function(){
    $('#hamburger-menu').trigger('click');
    });
  });