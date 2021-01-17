document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const themes = document.querySelectorAll('.dropdown__item')
    const currentTheme = localStorage.getItem('theme');
    
    const navBar = document.querySelector('.nav__bar');
    const navItems = document.querySelectorAll('.nav__item');
    const menu = document.querySelector('.nav__menu');

    const backToTop = document.querySelector('.back-to-top');

    const toggleClass = (elm, cssClass) => {
        elm.classList.toggle(cssClass);
    }

    // Hamburger menu click opens and closes the mobile/tablet nav

    menu.addEventListener('click', () => {
        toggleClass(navBar, 'active');
        toggleClass(menu.children[0], 'active'); // Accesses fontAwesome i tag. Changes icon from burger to X 
    });

    // Hamburger nav item click closes the mobile/tablet nav

    for (i=0; i < navItems.length; i++) {
        // navItems includes themes so to negate closing upon setTheme use navItems.length-1
        if (i < navItems.length-1) {
            navItems[i].addEventListener('click', () => {
                toggleClass(navBar, 'active');
                toggleClass(menu.children[0], 'active');
            });
        }
    }

    const setTheme = (theme) => {
        if (theme === 'light') {
            document.getElementsByClassName("theme--style")[0].href = '../css/default.css'
            document.getElementById('nav__logo').src = "img/MW-logo--black.png"
        } else if (theme === 'blue') {
            document.getElementsByClassName("theme--style")[0].href = '../css/theme/theme-blue.css'
            document.getElementById('nav__logo').src = "../img/MW-logo--lightgrey.png"
        } else if (theme === 'pink') {
            document.getElementsByClassName("theme--style")[0].href = '../css/theme/theme-pink.css'
            document.getElementById('nav__logo').src = "../img/MW-logo--lightgrey.png"
        }
        
        localStorage.setItem('theme', theme);
    }

    if (currentTheme === null) {
        setTheme('light');
    } else {
        setTheme(currentTheme);
    }

    for (let i=0; themes.length > i; i++){
        themes[i].addEventListener('click', () => {
            let theme = themes[i].dataset.theme;
            const localStorageTheme = localStorage.getItem('theme');
            
            if (themes[i].dataset.theme === localStorageTheme) {
                return;
            } else {
                setTheme(theme);
            }
        });
    }

    // back-to-top

    window.addEventListener('scroll', () => {
        // toggleClass() activates every 500 Yscroll for an unknown reason, but using the below method behaves as expected
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            if (navBar.classList.contains('active')) {
                toggleClass(navBar, 'active');
            }
            window.scrollTo({top: 0});
        });
    }

});