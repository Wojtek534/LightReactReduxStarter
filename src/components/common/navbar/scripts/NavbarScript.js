import $ from 'jquery';

// White screen on scroll (add class)
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll >= 30){
    $(".navbar").addClass("transform");
  } else{
    $(".navbar").removeClass("transform");
  }
});
