$(function(){
	$(".pannel p").not(":first").hide();
			$('.heading:first').find('span').html('-');
			$('.heading:first').css({ "background-color": "#f4b60d", "color":"#fff"});
			$(".pannel .heading").click(function(){
			$(".heading").css({ "background-color": "#fff", "color":"#000"});
				$(this).css({ "background-color": "#f4b60d", "color":"#fff"});
				
				$('.pannel span').html('+');
				$(".pannel p").slideUp();
				$(this).next().slideDown();
				$(this).find('span').html('-');
				
			});
			
		$('.botton2').click(function(){
			$('.slider').animate(
			{marginLeft: '-1161px'},400);
			$('.click').css('backgroundColor','white');
			$(this).css('backgroundColor','black');
			
		})	
		$('.botton3').click(function(){
			$('.slider').animate(
			{marginLeft: '-2322px'},400);
			$('.click').css('backgroundColor','white');
			$(this).css('backgroundColor','black');
		})	
		$('.botton1').click(function(){
			$('.slider').animate(
			{marginLeft: 0},400);
			$('.click').css('backgroundColor','white');
			$(this).css('backgroundColor','black');s
		})	
});
