function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}


document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        navbar.classList.add(savedTheme === 'dark-mode' ? 'navbar-dark' : 'navbar-light');
        toggleSwitch.checked = savedTheme === 'dark-mode';
    } else {
        body.classList.add('light-mode');
        navbar.classList.add('navbar-light');
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.replace('light-mode', 'dark-mode');
            navbar.classList.replace('navbar-light', 'navbar-dark');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            navbar.classList.replace('navbar-dark', 'navbar-light');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
