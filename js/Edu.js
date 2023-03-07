let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let rightNav = document.querySelector('.rightNav')
let navlist = document.querySelector('.navlist')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-height-resp');
    rightNav.classList.toggle('v-hidden-resp');
    navlist.classList.toggle('v-hidden-resp');
})