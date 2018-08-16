$j(window).load(function(){
	"use strict";
	
	initLandingMenuAppear();
	
});
									
$j(document).ready(function() {
	"use strict";
	
	initLandingSesion();
	initMenuSesion();
});



/*
**Init sesion for landing
*/
function initLandingSesion() {
	"use strict";
	
	if($j('.menu_on').length){
		
		$j(".menu_on.fullscreen_menu").on("click",function(e){
			if($j(this).attr("data-value") != ""){
				$j.ajax({
					type: "POST",
					url: qode_root+'updatesession.php', 
					data: {enable_popup_menu : $j(this).attr("data-value")}, 
					success: function(data){
							window.open('http://pitch.select-themes.com/','_blank');
						},
					async: false
				});
			}
		});

		$j(".menu_on.side_area").on("click",function(){
			if($j(this).attr("data-value") != ""){
				$j.ajax({
					type: "POST",
					url: qode_root+'updatesession2.php', 
					data: {enable_side_area : $j(this).attr("data-value")}, 
					success: function(data){
							window.open('http://pitch.select-themes.com/','_blank');
						},
					async: false
				});
			}
		});
		
		$j(".menu_on.slide_down_menu").on("click",function(){
			if($j(this).attr("data-value") != ""){
				$j.ajax({
					type: "POST",
					url: qode_root+'updatesession3.php', 
					data: {menu_appearance : $j(this).attr("data-value")}, 
					success: function(data){
							window.open('http://pitch.select-themes.com/','_blank');
						},
					async: false
				});
			}
		});
		
		$j(".menu_on.regular_menu").on("click",function(){
			if($j(this).attr("data-value") != ""){
				$j.ajax({
					type: "POST",
					url: qode_root+'updatesession4.php', 
					data: {regular_menu : $j(this).attr("data-value")}, 
					success: function(data){
							window.open('http://pitch.select-themes.com/','_blank');
						},
					async: false
				});
			}
		});
	}
}


/*
**Init sesion for menu
*/
function initMenuSesion() {
	"use strict";
	
		$j("#nav-menu-item-56340 .textwidget a").on("click",function(e){
			$j.ajax({
				type: "POST",
				url: qode_root+'updatesession.php', 
				data: {enable_popup_menu : 'yes'}, 
				success: function(data){
					window.location = 'http://pitch.select-themes.com/';
				},
				async: false
			});
		});

		$j("#nav-menu-item-56341 .textwidget a").on("click",function(){
			$j.ajax({
				type: "POST",
				url: qode_root+'updatesession2.php', 
				data: {enable_side_area : 'yes'}, 
				success: function(data){
					window.location = 'http://pitch.select-themes.com/';
				},
				async: false
			});
		});
		
		$j("#nav-menu-item-56342 .textwidget a").on("click",function(){
			$j.ajax({
				type: "POST",
				url: qode_root+'updatesession3.php', 
				data: {menu_appearance : 'top_menu_slide_down'}, 
				success: function(data){
					window.location = 'http://pitch.select-themes.com/';
				},
				async: false
			});
		});

		$j("#nav-menu-item-56343 .textwidget a").on("click",function(){
			$j.ajax({
				type: "POST",
				url: qode_root+'updatesession4.php', 
				data: {regular_menu : 'default'}, 
				success: function(data){
					window.location = 'http://pitch.select-themes.com/';
				},
				async: false
			});
		});
}


/*
**Init sesion for landing
*/
function initLandingMenuAppear() {
	"use strict";
	
		if($j('.page-id-16.landing_fullscreen_menu_on').length){
			$j('a.popup_menu').trigger( "click" );
		}
		if($j('.page-id-16.landing_side_area_on').length){
			$j('a.side_menu_button_link').trigger( "click" );
		}
		
		if($j('.page-id-16.top_menu_slide_down_on').length){
			$j('a.menu_appear').trigger( "click" );
		}
		
}