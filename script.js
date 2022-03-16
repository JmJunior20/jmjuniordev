// navbar toggler
let navToggler = document.getElementById('navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navCollapse.classList.toggle('showNav');
});
