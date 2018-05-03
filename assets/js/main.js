; (function () {

	'use strict';



	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	// Main Menu Superfish
	var mainMenu = function () {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};



	// Offcanvas and cloning of the main menu
	var offcanvas = function () {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function () {

			if ($('body').hasClass('fh5co-offcanvas')) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// $('body').toggleClass('fh5co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function () {
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if (w.width() > 769) {
				if ($('body').hasClass('fh5co-offcanvas')) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});

	}



	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function () {
		$(document).click(function (e) {
			var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('fh5co-offcanvas')) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}
		});
	};


	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 20, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var scheduleTab = function () {
		$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());

		$(window).resize(function () {
			$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
		});

		$('.schedule a').on('click', function (event) {

			event.preventDefault();

			var $this = $(this),
				sched = $this.data('sched');

			$('.schedule a').removeClass('active');
			$this.addClass('active');
			$('.schedule-content').removeClass('active');

			$('.schedule-content[data-day="' + sched + '"]').addClass('active');

		});
	};


	var hideEvents = function (date) {

		var maxItems = $(".upcomingevents").data("mtamounteventstodisplay") || 3;
		$(".upcomingevents > div.event").addClass("hidden");
		var i = 0;
		$(".upcomingevents > div.event").each(function (index, element) {
			if (i < maxItems && $(element).data("mteventdate") >= date) {
				$(element).removeClass("hidden");
				i++;
			}
		});
	};

	var fulleventList = function (date) {
		var items = $("div.fulleventList > div.event");

		var futureItems = $.grep(items, function (n, i) {
			return n.id > date
		});

		if (!futureItems || futureItems.length === 0)
			return;
		var nextEvent = futureItems[futureItems.length - 1];

		if (!nextEvent)
			return;

		location.href = "#";
		location.href = "#" + nextEvent.id;


	}

	// Document on load.
	$(function () {
		mainMenu();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		scheduleTab();
		hideEvents(Date.now() / 1000);
		fulleventList(Date.now() / 1000);
	});


}());