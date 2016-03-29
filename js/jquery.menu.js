$(document).ready(function(){
$('#mega-menu-1').dcMegaMenu({
    rowItems: '4',
    speed: 'fast',
    effect: 'fade'
});

$(function(){
$('.mega-menu li').click(function() {
    var $this = $(this),
    _clickTab = $this.find('a').attr('href'); // 找到連結a中的href標籤值
    $.get(_clickTab,function(data){
        $("#page").html(data);
    });
    return false
})
})
});
