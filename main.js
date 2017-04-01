setInterval(function() {
    if ($('#olive').hasClass('wobble-left')) {
        $('#olive').addClass('wobble-right');
        $('#olive').removeClass('wobble-left');
    } else {
        $('#olive').addClass('wobble-left');
        $('#olive').removeClass('wobble-right');
    }
}, 1000);