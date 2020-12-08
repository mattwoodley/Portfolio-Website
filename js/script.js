const themes = document.getElementsByClassName('theme');
const leftColumn = document.querySelector('.intro__col--left');
const currentTheme = localStorage.getItem('theme');

setTheme = (theme) => {
    if (theme === 'light') {
        document.getElementsByClassName("theme--style")[0].href = '../css/default.css'
    } else if (theme === 'blue') {
        document.getElementsByClassName("theme--style")[0].href = '../css/theme/theme-blue.css'
    } else if (theme === 'pink') {
        document.getElementsByClassName("theme--style")[0].href = '../css/theme/theme-pink.css'
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
            themeConfirmation();
        }
    });
}

themeConfirmation = () => {
    if (leftColumn.querySelectorAll("p").length === 1) {
        // if themeConfirmation already exists then don't add another paragraph as it leads to textContent repeating.
        return;
    } else {
        const themeConfirmation = document.createElement('p');
        themeConfirmation.textContent = "*Theme will be saved for your next visit";
        themeConfirmation.setAttribute("class", "intro__save");
        leftColumn.appendChild(themeConfirmation);
        window.setTimeout(() => themeConfirmation.remove(), 4000);
    }

}