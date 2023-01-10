
  // var menu
  var menuMedia = document.querySelector('#menuMedia')
  var navbarMenu = document.querySelector('.links ul')
  var closeMenu = document.querySelector('#close-menu')
  // open cart
  menuMedia.onclick = () => {
      navbarMenu.classList.add('active');
  };
  // close cart
  closeMenu.onclick = () => {
      navbarMenu.classList.remove('active');
  };

