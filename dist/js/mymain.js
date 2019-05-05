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
  const headers = $('.nav-list__header'); console.log('headers: ', headers);
  const HEADING_OPEN_CLASS = 'nav-list__header--open';
  const SUBLIST_HIDDEN_CLASS = 'sub-list--hidden';

  headers.each((i, headersEl) => {
    $(headersEl).on('click', (e) => {
      const subListEl = $(headersEl).siblings();

      // Add/remove selected styles to list category heading
      if (headersEl) {
        toggleClass($(headersEl), HEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}

// Menu open sidenav icon, shown only on mobile
(function($) {
	// Toggle.
	$('.btn-burguer').on('click', function() {
		$('.sidebar').toggleClass('s-full');
    $('.main').toggleClass('w-push');
		$(this).toggleClass('open-bar');
    return(false);
	});
})(jQuery);
