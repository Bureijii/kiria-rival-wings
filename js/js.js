$(function(){
    $('.toc-list a').click(function(){
        $('a.lastclicked').removeClass('lastclicked'); 
        $(this).addClass('lastclicked'); 
    });
});