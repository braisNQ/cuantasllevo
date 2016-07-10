//http://jsfiddle.net/paulalexandru/NESFL/

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {  
    var url = new String(e.target);
    var pieces = url.split('#');
    
    if (pieces[1] == 'home'){
        $('#home').css('left','-'+$(window).width()+'px');    
        var left = $('#home').offset().left;
        $("#home").css({left:left}).animate({"left":"0px"}, "10");
    }
    
    if (pieces[1] == 'list'){
        $('#list').css('bottom','-'+$(window).height()+'px');            
        var bottom = $('#list').offset().bottom;
        $("#list").css({bottom:bottom}).animate({"bottom":"0px"}, "10");
    }
    
    if (pieces[1] == 'settings'){
        $('#settings').css('right','-'+$(window).width()+'px');    
        var right = $('#settings').offset().right;
        $("#settings").css({right:right}).animate({"right":"0px"}, "10");
    }
    
    if (pieces[1] == 'info'){
        $('#info').css('top','-'+$(window).height()+'px');            
        var top = $('#info').offset().top;
        $("#info").css({top:top}).animate({"top":"0px"}, "10");
    }
})