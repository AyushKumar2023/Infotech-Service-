document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;

    const openSidebar = () => {
        sidebar.classList.add('active');
        body.classList.add('sidebar-active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        body.classList.remove('sidebar-active');
    };

    hamburger.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
});