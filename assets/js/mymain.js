// Scripts
$(document).ready(() => {
	setSidebarListeners();
  setSidebarCloseListener();
});

// Set constants and grab needed elements
const sidebarEl = $('.sidebar');

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Sidebar list sliding functionality
function setSidebarListeners() {
  const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
  const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
  const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

  subHeadings.each((i, subHeadingEl) => {
    $(subHeadingEl).on('click', (e) => {
      const subListEl = $(subHeadingEl).siblings();

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}


(function($) {
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
				( checkbox.prop('checked') ) ? checkbox.siblings('ul')
        .attr('style', 'display:none;')
        .slideDown(300) : checkbox.siblings('ul')
        .attr('style', 'display:block;')
        .slideUp(300);

        $('.accordion__label').toggleClass('accordion__label--open');
			});
		});
	}
})(jQuery);

/*example*/
/* Scripts for css grid dashboard */
// Set constants and grab needed elements
const gridEl = $('.grid');
const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
const GRID_NO_SCROLL_CLASS = 'grid--noscroll';


// Menu open sidenav icon, shown only on mobile
function setMenuClickListener() {
  $('.header__menu').on('click', function(e) { console.log('clicked menu icon');
    toggleClass(sidebarEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}

// Sidenav close icon
function setSidebarCloseListener() {
  $('.sidenav__brand-close').on('click', function(e) {
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}


