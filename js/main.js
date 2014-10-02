$(document).ready(function() {
    // I don't like that the parent is being hidden so I'm going to unhide it.
    $('#slide-down').show();
    // all sections are childen of #slide-down so to start we should hide them all.
    $('#slide-down section').hide();


    function toggleSectionByName(name) {
        // I need to know if any section is currently visible so I can 
        // quickly show another section rather than having the choppy affect of sliding it down.
        // I also need to save the value because I'm going to hide them all directly after this.
        var visible = $('#slide-down section').is(':visible');

        // I want to automatically hide all sections
        // EXCEPT the current section im on
        // because I need to preserve its open/close state in order to toggle it.
        $('#slide-down section').not('#' + name + '-drop').hide();

        if( visible ) {
            $('#' + name + '-drop').toggle();
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
