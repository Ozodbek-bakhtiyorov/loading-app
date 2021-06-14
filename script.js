window.addEventListener('DOMContentLoaded', ()=> {
    const loaded = document.querySelector('.loader');
    setTimeout(() => {
        loaded.style.opacity = '0';
        setTimeout(() => {
            loaded.style.display = "none";
        }, 500);
    }, 2000);
});