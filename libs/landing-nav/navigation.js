$.fn.navigation = function() {
	// Cache selectors
	var lastId,
	topMenu = this,
	topMenuHeight = topMenu.outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function() {
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			}),
			noScrollAction = false;

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		noScrollAction = true;
		$("html, body").stop().animate({ 
			scrollTop: offsetTop
		}, {
			duration: 300,
			complete: function() {
				menuItems
				.parent().removeClass("active")
				.end().filter('[href*=" + href +"]').parent().addClass("active");
				setTimeout(function(){ noScrollAction = false; }, 10);
			}
		});
		e.preventDefault();
	});
}