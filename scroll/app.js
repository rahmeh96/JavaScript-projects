const navContainer = document.querySelector('.nav-container');
const sidebar =document.querySelector('.side-bar');
const btn = document.querySelector('.scrollToTop')
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navContainer.classList.add('nav-new');
    } else {
        // Scrolling up
        navContainer.classList.remove('nav-new');
        

    lastScrollTop = scrollTop;
}
});

function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('active'); 
}


window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

