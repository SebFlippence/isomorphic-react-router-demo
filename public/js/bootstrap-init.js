$(function() {
    // bootstrap-material-design
    $.material.init();

    // Fix for reredering checkboxes and buttons on react route change
    $('a').mouseup(function() {
        setTimeout(function () {
            $.material.checkbox();
            $.material.togglebutton();
            $.material.radio();
        }, 10);
    });
});
