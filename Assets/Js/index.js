document.getElementById("menu-h").addEventListener('click', () => {
    const input = document.getElementById("menu-h");
    const menu = document.querySelector(".menu-responsivo-content")

      if (input .checked) {
          menu.style.transform = 'translateX(0%)';
      } else {
          menu.style.transform = 'translateX(-100%)';
  }
})