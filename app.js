console.log("Test");
let ham = document.getElementById('hambergur');
let nav_item = document.getElementById('nav-items');
let ham_menu_close = document.querySelector('#ham-menu-close');
let ham_menu = document.querySelector('#ham-menu');
let main = document.querySelector('#main')

ham.addEventListener('click' , function(e){
    nav_item.classList.toggle('left-960');
    nav_item.classList.toggle('left-0');
    ham_menu.classList.toggle('hidden');
    ham_menu_close.classList.toggle('hidden');
    ham_menu_close.classList.toggle('block');
    main.classList.toggle('pe-none')
})