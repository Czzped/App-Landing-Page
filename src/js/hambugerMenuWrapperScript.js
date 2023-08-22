const menuLine = document.getElementById('menuLine').addEventListener('click', activateMobileMenu)

function activateMobileMenu() {
    const mobileMenuWrapper = document.getElementById('mobileMenuWrapper')

    mobileMenuWrapper.classList.toggle('activatedHambugerMenuWrapper')
}