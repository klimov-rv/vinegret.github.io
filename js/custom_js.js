
var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

	if($j('body.page-id-54668').length > 0) {
$j(window).load(function(){
	$j('.page-id-54668 .ajax_loader').fadeOut( "slow" );
});
$j(window).unbind('.backToTopShowHide');
	$j(window).scroll(function () {
		var b = $j(this).scrollTop();
		var c = $j(this).height();
		var d;
		if (b > 0) { d = b + c / 2; } else { d = 1; }
		
		if (d < 5900) { totop_button("off"); } else { totop_button("on"); }
	});
}

if($j('.drop_down > ul > li').length > 0) {
	var menu_items = $j('.drop_down > ul > li');
	menu_items.each( function(i) {
		if ($j(menu_items[i]).find('.second').length > 0) {
			if($j(menu_items[i]).hasClass('wide')){
				$j(this).find('.second > .inner > ul > li').each(function() {
					if($j(this).find('img').length > 0) {
						$j(this).find('img').css({"width":"100%","height":"auto"});
					}
				});
			}
		}
	});
}});
