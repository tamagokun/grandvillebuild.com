$(document).ready( function() {
	
	jQuery.fn.dropShadow = function(settings) {
		settings = jQuery.extend({
			shadowcolor: '#555656',
			ldistance: 0,
			tdistance: 1
		}, settings);

		$(this).css("position", "relative");
		var textcolor = $(this).css("color");
		var padding = $(this).css("paddingLeft");
		var someMargin = '0';
		if( $.browser.msie ){
			someMargin = '3px';
		}
		$(this).css("color", settings.shadowcolor);
		$(this).append('<span class="the-shad">' + $(this).text() + '</span>');
			$(".the-shad", $(this) ).css({
				'left': settings.ldistance * -1,
				'top': settings.tdistance * -1,
				'position': 'absolute',
				'color': textcolor,
				'padding':padding,
				'marginTop': someMargin
			});

	}
	
	$(".content li h2").each(function() {
		$(this).dropShadow({
			tdistance: 1,
			ldistance: 1
		});
	});
	
	$(".content li:first").show();
	
	$("#nav li a[href*='#']").click( function() {
	
		$("#nav li a").each( function() {
			$(this).attr("class", "");
		});
		
		$(".content>li").each( function() {
			$(this).hide();
		});
		
		var clicked = $("#nav li a").index(this);
		
		$("#nav li a:eq("+clicked+")").attr("class", "this");
		$("#myhouse").attr("class", "house"+(clicked + 1));
		if($.browser.msie && $.browser.version < 7){
			var houseImage = clicked + 1;
			if(houseImage == 4){
				houseImage = 5;
			}
		
			if( houseImage == 3){
				houseImage = 4;
			}
			$("#myhouse").css("background-image","url(../images/house-"+houseImage+".png)");
			$(document).pngFix();
		}
		$(".content>li:eq("+clicked+")").fadeIn("slow");
		
		return false;
	});
	
	$("a.architect").bind("click", function() {
		$("#architect-contact").toggle();
		return false;
	});
	
	$(".content .plans-contact li.button a").bind("click", function() {
		$("#architect-contact").hide();
		return false;
	});
	
});