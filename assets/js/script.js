document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /**
     * Navbar toggle in mobile
     */
    const $navbar = document.querySelector("[data-navbar]");
    const $navToggler = document.querySelector("[data-nav-toggler]");

    if ($navToggler) {
        $navToggler.addEventListener("click", () => {
            if ($navbar) {
                $navbar.classList.toggle("active");
            }
        });
    }
    const $header = document.querySelector("[data-header");
    window.addEventListener("scroll",()=>{
        $header.classList[window.scrollY > 50 ? "add" :"remove"]("active");
    })

    const $toggleBtns = document.querySelectorAll("[data-toggle-button]");

    $toggleBtns.forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", () => {
            $toggleBtn.classList.toggle("active");
        });
    });
    
});
