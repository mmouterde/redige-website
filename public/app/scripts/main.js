document.addEventListener("DOMContentLoaded", function () {
    smoothScroll.init({
        offset: "50px",
        callback: function (anchor, toggle) {
            disableNavItems();
            toggle.classList.add('is-active');
            if (hamburgerMenu.classList.contains('is-active')) {
                hamburgerMenu.classList.remove('is-active');
                nav.classList.remove('is-active');
            }
        }
    });

});