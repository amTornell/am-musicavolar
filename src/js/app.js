
(function() {
	//**************      menu mobile    **************
    $('.menu-toggle').on('click', function(){
        $('.menu-overlay').toggleClass('full-menu');
    })


    var item = $('.item');
   
    // menu
    $('#nav-main a').on('click', function(){
      var clase= $(this).attr('rel');
      item.fadeOut('slow');
      $('.'+clase).fadeIn('slow');
    })


    if( $('nameid').length ){

    }

    $('#registro').on('shown.bs.modal', function () {
      $('#nombre').focus()
    })

    $(window).on('load resize', function () {
       // $('iframe[src*="instagram.com"]').responsiveInstagram();
    });

})();




//**************      / agregar fonts    **************