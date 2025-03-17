function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save the preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Apply dark mode if previously enabled
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Attach event listener to dark mode toggle button
    document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
});
