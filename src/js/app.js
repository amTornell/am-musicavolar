
(function() {
	//**************      menu mobile    **************
    $('.menu-toggle').on('click', function(){
        $('.menu-overlay').toggleClass('full-menu');
    })


    var item = $('.item');
   
    $('#nav-main a').on('click', function(){
      var clase= $(this).attr('rel');
      item.fadeOut('slow');
      $('.'+clase).fadeIn('slow');
    })


    if( $('nameid').length ){

    }

    $(window).on('load resize', function () {
       // $('iframe[src*="instagram.com"]').responsiveInstagram();
    });

})();




//**************      / agregar fonts    **************