/**
 * Portfolio Website Main Script
 * Add your interactive JavaScript here
 */

// Example: Smooth scroll for navigation links
// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach(link => {
//         link.addEventListener('click', function(e) {
//             const targetId = this.getAttribute('href').substring(1);
//             const target = document.getElementById(targetId);
//             if (target) {
//                 e.preventDefault();
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });
// });

// Example: Toggle mobile menu
// const menuBtn = document.getElementById('menu-btn');
// const nav = document.getElementById('nav');
// if (menuBtn && nav) {
//     menuBtn.addEventListener('click', () => {
//         nav.classList.toggle('open');
//     });
// }

// Example: Animate elements on scroll (simple fade-in)
// function revealOnScroll() {
//     const reveals = document.querySelectorAll('.reveal');
//     const windowHeight = window.innerHeight;
//     reveals.forEach(el => {
//         const top = el.getBoundingClientRect().top;
//         if (top < windowHeight - 100) {
//             el.classList.add('active');
//         }
//     });
// }
// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('DOMContentLoaded', revealOnScroll);

// Add more custom JS as needed for your portfolio


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
    // menu.classList.toggle('bx-bx');
    navbar.classList.add('active');
});
navbar.addEventListener('click', function() {
    // menu.classList.remove('bx-bx');
    navbar.classList.remove('active');
});

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     menu.classList.remove('active');
// }