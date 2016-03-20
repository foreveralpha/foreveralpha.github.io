var target = $('img');
var targetHeight = target.height();
var containerHeight = $('#logo').outerHeight();

var maxScroll = containerHeight - targetHeight;
var scrollRange = maxScroll/(target.length-1);

$(document).scroll(function(e){
    var scrollY = $(window).scrollTop();
    var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
    var divIndex = Math.floor(scrollY/scrollRange);

    target.has(':lt(' + divIndex + ')').css('opacity', .2);
    target.eq(divIndex).css('opacity', scrollPercent);
    target.has(':gt(' + divIndex + ')').css('opacity', 1);
});