// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 700;
var section_show_time = 700;

// jQuery stuff
jQuery(document).ready(function ($) {

    // Switch section
    $("a", '.mainmenu').click(function () {
        if (!$(this).hasClass('active')) {
            current_item = this;
            // close all visible divs with the class of .section
            $('.section:visible').fadeOut(section_hide_time, function () {
                $('a', '.mainmenu').removeClass('active');
                $(current_item).addClass('active');
                var new_section = $($(current_item).attr('href'));
                new_section.fadeIn(section_show_time);
            });
        }
        return false;
    });

    $('.link-to-section').click(function () {
        current_item = this;
        $('.section:visible').fadeOut(section_hide_time, function () {
            $('a', '.mainmenu').removeClass('active');
            var new_section = $($(current_item).attr('href'));
            new_section.fadeIn(section_show_time);
        });
    })
});

