console.log('begin of the script');

// When content is loaded:
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error('Year element not found');
    }
});

console.log('end of the script');