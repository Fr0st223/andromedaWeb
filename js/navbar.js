$(document).ready(function() {
    

/* Change Navbar orientation */
    
    
    
var jmediaquery = window.matchMedia("(max-width: 768px)");
changeNavbarSide(jmediaquery);   
jmediaquery.addListener(changeNavbarSide);   

    
function changeNavbarSide() {

if (jmediaquery.matches) {
    $('.navbar-toggler').removeClass('navbar-toggler-left').addClass('navbar-toggler-right');
}
    
else {
     $('.navbar-toggler').removeClass('navbar-toggler-right').addClass('navbar-toggler-left'); 
}    
}    
        
});