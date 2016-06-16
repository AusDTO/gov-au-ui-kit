$( document ).ready(function() {
    $('.js-accordion-trigger').bind('touchstart click', function (e) {
        jQuery(this).parent().find('ul').slideToggle('fast');
        jQuery(this).find(".chevron").toggleClass('top bottom');
        // apply the toggle to the ul
        jQuery(this).parent().toggleClass('is-expanded');
        e.preventDefault();
    });
});