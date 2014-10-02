$(document).ready(function() {
    // I don't like that the parent is being hidden so I'm going to unhide it.
    $('#slide-down').show();
    // all sections are childen of #slide-down so to start we should hide them all.
    $('#slide-down section').hide();


    function toggleSectionByName(name) {
        // I need to know if any section is currently visible so I can 
        // quickly show another section rather than having the choppy affect of sliding it down.
        // I also need to save the value because I'm going to hide them all directly after this.
        var visible = $('#slide-down section:visible');

        // I want to automatically hide all sections
        // EXCEPT the current section im on
        // because I need to preserve its open/close state in order to toggle it.
        $('#slide-down section').not('#' + name + '-drop').hide();

        // jQuery selectors (visible) always return an Array, but it may be empty so we need to check.
        if( visible.length > 0 ) {

            // All sections have classNames that identify themselves so let's check that.
            // This answers the question:
            //    "is the visible section the section that we are trying to toggle?"
            if(visible.hasClass(name)) {
                // if the visible section is the one being toggled
                // then we need to use the slideDown to achieve a nicer effect.
                $('#' + name + '-drop').slideToggle(150);
            }
            else {
                // Toggle is the same as hide() and show() just toggled.
                $('#' + name + '-drop').toggle();
            }
        }
        else {
            // all sections already have ids so I'll just use that.
            $('#' + name + '-drop').slideToggle(150);
        }

        $('#primary-nav li').not('.' + name).removeClass('active');
    }

    $('#primary-nav li').click(function(e) {
        e.preventDefault();

        if( $(this).hasClass('international') ) {
            toggleSectionByName('international');
        }
        else if( $(this).hasClass('politics') ) {
            toggleSectionByName('politics');
        }
        else if( $(this).hasClass('business') ) {
            toggleSectionByName('business');
        }
        else if( $(this).hasClass('technology') ) {
            toggleSectionByName('technology');
        }
        else if( $(this).hasClass('culture') ) {
            toggleSectionByName('culture');
        }
        else if( $(this).hasClass('blogs') ) {
            toggleSectionByName('blogs');
        }

        $(this).toggleClass('active');
    })
});
