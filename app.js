console.log("Test");
let ham = document.getElementById('hambergur');
let nav_item = document.getElementById('nav-items');
let ham_menu_close = document.querySelector('#ham-menu-close');
let ham_menu = document.querySelector('#ham-menu');
let main = document.querySelector('#main')
let body = document.querySelector('#body')

ham.addEventListener('click' , function(e){
    body.classList.toggle('overflow-y-hidden')
    nav_item.classList.toggle('-left-[1024px]');
    nav_item.classList.toggle('left-0');
    ham_menu.classList.toggle('hidden');
    ham_menu_close.classList.toggle('hidden');
    ham_menu_close.classList.toggle('block');
    main.classList.toggle('pointer-events-none')
})