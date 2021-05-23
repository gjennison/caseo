let nav = document.querySelector('nav')
let menu = document.querySelector('.links')
let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.close')


hamburger.addEventListener('click', openMenu)
cross.addEventListener('click', closeMenu)

window.addEventListener('load', (e) => {
    let height = nav.style.height
    menu.style.top = height.toString() + "px"
})

function openMenu(){
    menu.style.animation = "openMenuAnimation 0.5s"

    menu.classList.remove('closedMenu')
    menu.classList.add('openMenu')
    
    hamburger.classList.add('hideSVG')
    hamburger.classList.remove('displaySVG')
    cross.classList.add('displaySVG')
    cross.classList.remove('hideSVG')

}

function closeMenu(){
    menu.style.animation = "closeMenuAnimation 0.5s"
    
    menu.classList.remove('openMenu')
    menu.classList.add('closedMenu')

    hamburger.classList.remove('hideSVG')
    hamburger.classList.add('displaySVG')
    cross.classList.remove('displaySVG')
    cross.classList.add('hideSVG')

}

document.addEventListener('scroll', function(e) {
    if(window.scrollY >= 100){
        nav.classList.add('secondaryScheme')
        nav.classList.remove('primaryScheme')
    }
    if(window.scrollY < 100){
        nav.classList.add('primaryScheme')
        nav.classList.remove('secondaryScheme')
    }
})