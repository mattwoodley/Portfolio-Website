const themeDots = document.getElementsByClassName('theme-dot');
const currentTheme = localStorage.getItem('theme');


setTheme = (theme) => {
    if (theme === 'light') {
        document.getElementById("theme-style").href = 'default.css'
    } else if (theme === 'blue') {
        document.getElementById("theme-style").href = 'theme-blue.css'
    } else if (theme === 'green') {
        document.getElementById("theme-style").href = 'theme-green.css'
    } else if (theme === 'purple') {
        document.getElementById("theme-style").href = 'theme-purple.css'
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
        setTheme(theme);
    });
}