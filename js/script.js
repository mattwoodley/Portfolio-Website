document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const themes = document.getElementsByClassName('theme');
    const leftColumn = document.querySelector('.intro__col--left');
    const currentTheme = localStorage.getItem('theme');
    
    const navBar = document.querySelector('.nav__bar');
    const menu = document.querySelector('.nav__menu');

    const backToTop = document.querySelector('.back-to-top');

    const toggleClass = (elm, cssClass) => {
        elm.classList.toggle(cssClass);
    }

    menu.addEventListener('click', () => {
        toggleClass(navBar, 'active');
        toggleClass(menu.children[0], 'active'); // Accesses fontAwesome i tag. Changes icon from burger to X 
    });

    const setTheme = (theme) => {
        if (theme === 'light') {
            document.getElementsByClassName("theme--style")[0].href = '../css/default.css'
            document.getElementById('nav__logo').src = "img/MW-logo--darkgrey.png"
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
                // themeConfirmation();
            }
        });
    }

    // Commented out as I don't want to include this but may have use for it later
    // const themeConfirmation = () => {
    //     if (leftColumn != null) {
    //         // if leftColumn doesn't exist then don't fire.
    //         if (leftColumn.querySelectorAll("p").length === 1) {
    //             // if themeConfirmation already exists then don't add another paragraph as it leads to textContent repeating.
    //             return;
    //         } else {
    //             const themeConfirmation = document.createElement('p');
    //             themeConfirmation.textContent = "*Theme will be saved for your next visit";
    //             themeConfirmation.setAttribute("class", "intro__theme-save");
    //             leftColumn.appendChild(themeConfirmation);
    //             window.setTimeout(() => themeConfirmation.remove(), 4000);
    //         }
    //     }
    // }

    // back-to-top

    window.addEventListener('scroll', () => {
        // toggleClass() activates every 500 Yscroll for an unknown reason, but using the below method behaves as expected
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({top: 0});
    });

});