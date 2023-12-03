function mobileNavShow() {
    let mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('open')){
        mobileNav.classList.remove('open');
        document.querySelector('.nav-icon').src = "c:\Users\vanes\Downloads\bars-solid.svg";
    } else {
        mobileNav.classList.add('open');
        document.querySelector('.nav-icon').src = "c:\Users\vanes\Downloads\bars-solid.svg";
    }
}