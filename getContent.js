$('#cntnt').hide(0);
$("ol").children().each(function() {
    $(this).mouseenter(function(e) {

        var hrf = $(this).find("a").attr('href').slice(2);

        mouseX = e.pageX - 400;
        mouseY = e.pageY + 28;
        var myx = $(this).find("a").offset().right;

        $('#cntnt div').html('<table class="crsDesc">' + $('#dContent #t' + hrf).next().html() + '</table>');
        $('#cntnt').css({
            'top': mouseY,
            'left': myx
        }).show();
    });
    $(this).mouseleave(function() {
        $('#cntnt').hide(0);
    });
});