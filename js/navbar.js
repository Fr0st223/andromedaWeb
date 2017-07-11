$(document).ready(function() {
    
/* Change Navbar orientation */
var mediaQuery = window.matchMedia('(max-width: 768px)');

  
function changeNavbarSide() {

if (mediaQuery.matches) {
    $('.navbar-toggler').removeClass('navbar-toggler-left').addClass('navbar-toggler-right');  
}
    
else {
    $('.navbar-toggler').removeClass('navbar-toggler-right').addClass('navbar-toggler-left');
}    
}    
    
mediaQuery.addListener(changeNavbarSide);   
changeNavbarSide();    
   

/* Show/Hide Navbar Drawer */    
$('#showDrawer, #showDrawer_sub').click(function(){
    
    $('body').css('overflow-y', 'hidden');
    $('.main-nav').hide();    
    $('.navbar-drawer').addClass('enableResize');
    
})
    
$('#closeDrawer').click(function(){
    
    $('#navbarDrawer').removeClass('enableResize');
    $('.main-nav').show();
    $('body').css('overflow-y', 'scroll');
    $('.main-nav-wrapper').css('position','none');

})
    



});