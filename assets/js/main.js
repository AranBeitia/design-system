/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('.sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {
					// Deactivate section.
						$(this).addClass('inactive');
				},
				enter: function() {
					// Activate section.
						$(this).removeClass('inactive');
				}
			})
			.each(function() {
				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');
				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();
			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {
				// Deactivate section.
					$(this).addClass('inactive');
				},
				enter: function() {
				// Activate section.
					$(this).removeClass('inactive');
				}
			});

	// Toggle.
	$('.btn-burguer').on('click', function() {
		$('.sidebar').toggleClass('s-full');
    $('.main').toggleClass('w-push');
		$(this).toggleClass('open-bar');
    return(false);
	});
//Accordion
	var accordionsMenu = $('.accordion');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}

})(jQuery);

/*example*/
/* Scripts for css grid dashboard */

// $(document).ready(() => {
//   addResizeListeners();
//   setSidenavListeners();
//   setUserDropdownListener();
//   renderChart();
//   setMenuClickListener();
//   setSidenavCloseListener();
// });

// // Set constants and grab needed elements
// const sidenavEl = $('.sidenav');
// const gridEl = $('.grid');
// const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
// const GRID_NO_SCROLL_CLASS = 'grid--no-scroll';

// function toggleClass(el, className) {
//   if (el.hasClass(className)) {
//     el.removeClass(className);
//   } else {
//     el.addClass(className);
//   }
// }

// // User avatar dropdown functionality
// function setUserDropdownListener() {
//   const userAvatar = $('.header__avatar');

//   userAvatar.on('click', function (e) {
//     const dropdown = $(this).children('.dropdown');
//     toggleClass(dropdown, 'dropdown--active');
//   });
// }

// // Sidenav list sliding functionality
// function setSidenavListeners() {
//   const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
//   const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
//   const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

//   subHeadings.each((i, subHeadingEl) => {
//     $(subHeadingEl).on('click', (e) => {
//       const subListEl = $(subHeadingEl).siblings();

//       // Add/remove selected styles to list category heading
//       if (subHeadingEl) {
//         toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
//       }

//       // Reveal/hide the sublist
//       if (subListEl && subListEl.length === 1) {
//         toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
//       }
//     });
//   });
// }

// // Draw the chart
// function renderChart() {
//   const chart = AmCharts.makeChart("chartdiv", {
//     "type": "serial",
//     "theme": "light",
//     "dataProvider": [{
//       "month": "Jan",
//       "visits": 2025
//     }, {
//       "month": "Feb",
//       "visits": 1882
//     }, {
//       "month": "Mar",
//       "visits": 1809
//     }, {
//       "month": "Apr",
//       "visits": 1322
//     }, {
//       "month": "May",
//       "visits": 1122
//     }, {
//       "month": "Jun",
//       "visits": 1114
//     }, {
//       "month": "Jul",
//       "visits": 984
//     }, {
//       "month": "Aug",
//       "visits": 711
//     }, {
//       "month": "Sept",
//       "visits": 665
//     }, {
//       "month": "Oct",
//       "visits": 580
//     }],
//     "valueAxes": [{
//       "gridColor": "#FFFFFF",
//       "gridAlpha": 0.2,
//       "dashLength": 0
//     }],
//     "gridAboveGraphs": true,
//     "startDuration": 1,
//     "graphs": [{
//       "balloonText": "[[category]]: <b>[[value]]</b>",
//       "fillAlphas": 0.8,
//       "lineAlpha": 0.2,
//       "type": "column",
//       "valueField": "visits"
//     }],
//     "chartCursor": {
//       "categoryBalloonEnabled": false,
//       "cursorAlpha": 0,
//       "zoomable": false
//     },
//     "categoryField": "month",
//     "categoryAxis": {
//       "gridPosition": "start",
//       "gridAlpha": 0,
//       "tickPosition": "start",
//       "tickLength": 20
//     },
//     "export": {
//       "enabled": false
//     }
//   });
// }

// function toggleClass(el, className) {
//   if (el.hasClass(className)) {
//     el.removeClass(className);
//   } else {
//     el.addClass(className);
//   }
// }

// // If user opens the menu and then expands the viewport from mobile size without closing the menu,
// // make sure scrolling is enabled again and that sidenav active class is removed
// function addResizeListeners() {
//   $(window).resize(function (e) {
//     const width = window.innerWidth; console.log('width: ', width);

//     if (width > 750) {
//       sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
//       gridEl.removeClass(GRID_NO_SCROLL_CLASS);
//     }
//   });
// }

// // Menu open sidenav icon, shown only on mobile
// function setMenuClickListener() {
//   $('.header__menu').on('click', function (e) {
//     console.log('clicked menu icon');
//     toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
//     toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
//   });
// }

// // Sidenav close icon
// function setSidenavCloseListener() {
//   $('.sidenav__brand-close').on('click', function (e) {
//     toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
//     toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
//   });
// }

