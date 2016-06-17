$(document).ready(function () {
    $('.js-accordion-trigger').bind('touchstart click', function (e) {

        jQuery(this).parent().find('ul').slideToggle('fast');
        jQuery(this).find(".chevron").toggleClass('top bottom');
        // apply the toggle to the ul
        jQuery(this).parent().toggleClass('is-expanded');

        // https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions
        if (jQuery(this).attr('aria-expanded') == 'false') { // region is collapsed
            // update the aria-expanded attribute of the region
            jQuery(this).attr('aria-expanded', 'true');
            // move focus to the region
            jQuery(this).find('ul').focus();
            jQuery(this).find('span').text("Show menu");
        }
        else { // region is expanded
            // update the aria-expanded attribute of the region
            jQuery(this).attr('aria-expanded', 'false');
            jQuery(this).find('span').text("Hide menu");
        }

        e.preventDefault();
    });
});