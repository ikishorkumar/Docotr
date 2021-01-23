function handleMenu(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('._nav-item');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        burger.classList.toggle('toggle');
    });

   
}

handleMenu();