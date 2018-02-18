(function($){
    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with__sidebar');
    })

    $('#site-cache').click(function(e){
        $('body').removeClass('with__sidebar');
    })
})(jQuery);