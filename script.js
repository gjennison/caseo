let nav = document.querySelector('nav')
let menu = document.querySelector('.links')
let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.close')


hamburger.addEventListener('click', openMenu)
cross.addEventListener('click', closeMenu)

window.addEventListener('load', (e) => {
    let height = nav.style.height
    menu.style.top = height.toString() + "px"
    console.log(height)
})

function openMenu(){
    menu.style.animation = "openMenuAnimation 0.5s"

    menu.classList.remove('closedMenu')
    menu.classList.add('openMenu')

    hamburger.style.display = "none"
    cross.style.display = "block"
}

function closeMenu(){
    menu.style.animation = "closeMenuAnimation 0.5s"
    
    menu.classList.remove('openMenu')
    menu.classList.add('closedMenu')

    hamburger.style.display = "block"
    cross.style.display = "none"
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