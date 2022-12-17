const MenuMobile = document.querySelector('.menu-mobile svg');

MenuMobile.addEventListener('click', () => {
    const Menu = document.querySelector('ul');
    if(Menu.classList.contains('show-menu')){
        Menu.classList.remove('show-menu');
    }else{
        Menu.classList.add('show-menu');
    }
});