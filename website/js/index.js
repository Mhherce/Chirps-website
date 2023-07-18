const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("toggle-menu"),
    closeMenu = document.getElementById("close-menu")


toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    document.getElementById('toggle-menu').style.display = "none"
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
    document.getElementById('toggle-menu').style.display = "block"
})