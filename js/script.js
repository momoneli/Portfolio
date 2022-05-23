document.addEventListener("DOMContentLoaded", (e) => {
    /*============== Montrer / Cacher l'icône menu ==============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    /*====== MENU SHOW  ======*/

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
    /*====== MENU HIDDEN  ======*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

    /*============== Supprimer MENU MOBILE ==============*/ 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quand on clique sur chaque "nav_link", on supprime la classe "show-menu"
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Montrer SCROLL UP ====================*/ 
function scrollUp(){
const scrollUp = document.getElementById('scroll-up');
if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
})