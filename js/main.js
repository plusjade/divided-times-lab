$(document).ready(function() {
    // I don't like that the parent is being hidden so I'm going to unhide it.
    $('#slide-down').show();
    // all sections are childen of #slide-down so to start we should hide them all.
    $('#slide-down section').hide();


    // When international is clicked I want to show the international section.
    $('#primary-nav .international').click(function(e) {
        e.preventDefault();

        // I want to automatically hide all sections
        // EXCEPT the current section im on
        // because I need to preserve its open/close state in order to toggle it.
        $('#slide-down section').not('#international-drop').hide();
        // all sections already have ids so I'll just use that.
        $('#international-drop').slideToggle(150);
    })

    // politics
    $('#primary-nav .politics').click(function(e) {
        e.preventDefault();

        $('#slide-down section').not('#politics-drop').hide();
        $('#politics-drop').slideToggle(150);
    })

    // business
    $('#primary-nav .business').click(function(e) {
        e.preventDefault();

        $('#slide-down section').not('#business-drop').hide();
        $('#business-drop').slideToggle(150);
    })

    // technology
    $('#primary-nav .technology').click(function(e) {
        e.preventDefault();

        $('#slide-down section').not('#technology-drop').hide();
        $('#technology-drop').slideToggle(150);
    })

    // culture
    $('#primary-nav .culture').click(function(e) {
        e.preventDefault();

        $('#slide-down section').not('#culture-drop').hide();
        $('#culture-drop').slideToggle(150);
    })

    // blogs
    $('#primary-nav .blogs').click(function(e) {
        e.preventDefault();

        $('#slide-down section').not('#blogs-drop').hide();
        $('#blogs-drop').slideToggle(150);
    })
});
