document.addEventListener('DOMContentLoaded', function () {
  // hamburger menu behavior (existing)
  const toggleButtons = document.querySelectorAll('.menu-toggle');
  toggleButtons.forEach(function (btn) {
    const menu = btn.parentElement.querySelector('.menu');

    function openMenu() {
      menu.classList.add('expanded');
      menu.classList.remove('collapsed');
      // const first = menu.querySelector('a');
      // if (first) first.focus();
    }
    function closeMenu() {
      menu.classList.remove('expanded');
      menu.classList.add('collapsed');
      // btn.focus();
    }
    btn.addEventListener('click', function () {
      if (menu.classList.contains('expanded')) closeMenu();
      else openMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 480) {
        menu.classList.add('expanded');
        menu.classList.remove('collapsed');
      } else {
        menu.classList.remove('expanded');
        menu.classList.add('collapsed');
      }
    });
    if (window.innerWidth >= 480) menu.classList.add('expanded');
    else menu.classList.add('collapsed');
  });

  // Dropdown behavior
  const dropdownItems = document.querySelectorAll('.menu-item.dropdown');
  dropdownItems.forEach(function (item) {
    const toggle = item.querySelector('.dropdown-toggle');

    function openDropdown() {
      item.classList.add('open');
      // focus first link inside submenu
      // const first = item.querySelector('.dropdown-menu a');
      // if (first) first.focus();
    }
    function closeDropdown() {
      item.classList.remove('open');
      // toggle.focus();
    }

    // Toggle on click
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (item.classList.contains('open')) closeDropdown();
      else {
        // close other open dropdowns
        document.querySelectorAll('.menu-item.dropdown.open').forEach(function (other) {
          if (other !== item) other.classList.remove('open');
        });
        openDropdown();
      }
    });

    // Close on Escape when open
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && item.classList.contains('open')) {
        closeDropdown();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!item.contains(e.target) && item.classList.contains('open')) {
        item.classList.remove('open');
      }
    });

    // Optional: when a submenu link is clicked on small screens, close the whole menu
    const submenu = item.querySelector('.dropdown-menu');
    submenu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth < 480) {
        // close dropdown and collapse primary menu
        item.classList.remove('open');
        const topMenu = item.closest('.menu');
        if (topMenu && window.innerWidth < 480) {
          topMenu.classList.remove('expanded');
          topMenu.classList.add('collapsed');
        }
      }
    });
  });

  // Ensure only one dropdown open if resized or reopened
  window.addEventListener('resize', function () {
    document.querySelectorAll('.menu-item.dropdown.open').forEach(function (item) {
      // keep them open on desktop if desired, or close if you prefer
      if (window.innerWidth < 480) item.classList.remove('open');
    });
  });
});