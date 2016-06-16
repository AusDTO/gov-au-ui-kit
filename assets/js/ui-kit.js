$('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('ul').slideToggle('fast');
    // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
});