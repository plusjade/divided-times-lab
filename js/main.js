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
    }

    // When international is clicked I want to show the international section.
    $('#primary-nav .international').click(function(e) {
        e.preventDefault();
        toggleSectionByName('international');

        $('#primary-nav li').not('.international').removeClass('active');
        $(this).toggleClass('active');
    })

    // politics
    $('#primary-nav .politics').click(function(e) {
        e.preventDefault();
        toggleSectionByName('politics');
    })

    // business
    $('#primary-nav .business').click(function(e) {
        e.preventDefault();
        toggleSectionByName('business');
    })

    // technology
    $('#primary-nav .technology').click(function(e) {
        e.preventDefault();
        toggleSectionByName('technology');
    })

    // culture
    $('#primary-nav .culture').click(function(e) {
        e.preventDefault();
        toggleSectionByName('culture');
    })

    // blogs
    $('#primary-nav .blogs').click(function(e) {
        e.preventDefault();
        toggleSectionByName('blogs');
    })
});
