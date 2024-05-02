function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //targeting element
    const icon = document.querySelector(".hamburger-icon"); //targeting element
    menu.classList.toggle("open"); //add or remove open class
    icon.classList.toggle("open"); //add or remove open class
}

