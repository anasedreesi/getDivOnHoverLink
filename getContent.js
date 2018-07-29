$('#cntnt').hide(0);
$("ol").children().each(function() {
    $(this).mouseenter(function(e) {
        //alert($(this).find( "a" ).attr('href'));  
        var hrf = $(this).find("a").attr('href').slice(2);
        //alert('#a'+hrf);
        //var myId = '#a' + hrf;
        mouseX = e.pageX - 400;
        mouseY = e.pageY + 28;
        var myx = $(this).find("a").offset().right;
        //var elm = $(myId); 
        //alert(myId);
        // alert('<table>' + elm.html() + '</table>');
        //alert('<div>'+elm + '</div>');  
        //  $('#cntnt div').html('<table class="crsDesc">'+ elm.html()+ '</table>');
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