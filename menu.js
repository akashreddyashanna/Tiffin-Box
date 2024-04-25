function showMenu(menuId) {
    // Hide all menus first
    const menus = document.querySelectorAll('.breakfast-menu');
    menus.forEach(menu => menu.classList.remove('active'));
  
    // Show the clicked menu
    const selectedMenu = document.getElementById(menuId + '-menu');
    selectedMenu.classList.add('active');
  }
  
  // Set breakfast menu as active by default
  document.getElementById('breakfast-menu').classList.add('active');
  