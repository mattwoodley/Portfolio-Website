const themeDots = document.getElementsByClassName('theme-dot');
const leftColumn = document.querySelector('.left-column');
const currentTheme = localStorage.getItem('theme');

setTheme = (theme) => {
    if (theme === 'light') {
        document.getElementById("theme-style").href = '../css/default.css'
    } else if (theme === 'blue') {
        document.getElementById("theme-style").href = '../css/theme/theme-blue.css'
    } else if (theme === 'green') {
        document.getElementById("theme-style").href = '../css/theme/theme-green.css'
    } else if (theme === 'pink') {
        document.getElementById("theme-style").href = '../css/theme/theme-pink.css'
    }
    
    localStorage.setItem('theme', theme);
}

if (currentTheme === null) {
    setTheme('light');
} else {
    setTheme(currentTheme);
}

for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', () => {
        let theme = themeDots[i].dataset.theme;
        const localStorageTheme = localStorage.getItem('theme');
        
        if (themeDots[i].dataset.theme === localStorageTheme) {
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
        themeConfirmation.textContent = "*Theme settings will be saved for your next visit";
        themeConfirmation.setAttribute("id", "settings-note");
        leftColumn.appendChild(themeConfirmation);
        window.setTimeout(() => themeConfirmation.remove(), 4000);
    }

}