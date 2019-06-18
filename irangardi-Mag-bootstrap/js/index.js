jQuery(document).ready(function($){
  $('.feature-container').each(function(){
    $(".feature-post").slick({
      autoplay: true,
      autoplaySpeeed: 4500,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:'.sl-prev',
      nextArrow:'.sl-next',
    });
  });

    $(".most-popular-posts").slick({
      autoplay: false,
      autoplaySpeeed: 4500,
      slidesToShow: 4,
      slidesToScroll: 1,
      
    });
});
