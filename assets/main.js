let menu = document.querySelector('#menu-bars')
navbar = document.querySelector(".navbar")


console.log('js imported')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}