
 jQuery(document).ready(function($) {
    
$('.close_btn').hide();


$('.expand_btn').click(function(event) {
  
   $('.side_menu').css({
     backgroundColor: 'rgba(0,0,0,0.8)',
     transform: 'translateX(0px)',
     transition:'transform 0.4s ease-in'
   });
      $(this).hide();
      $('.close_btn').fadeIn('slow');
      

 });

   $('.close_btn').click(function(event) {
     /* Act on the event */
           $('.side_menu').css({
         backgroundColor: 'rgba(0,0,0,0.8)',
         transform: 'translateX(-100px)',
         transition:'transform 0.4s ease-in'
      });
      $(this).hide();
      $('.expand_btn').fadeIn();


   });



// header transparent-------------------------------------------		
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {

	    $('.back-to-top').fadeIn('slow');  
	    	// back-to-top
	  }

	  else{

		    $('.back-to-top').fadeOut('slow');
		  	// back-to-top	
	   }
  });






//AOS animation------------------------------------------------------
  AOS.init();


 }); 