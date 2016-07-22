document.addEventListener("DOMContentLoaded", function () {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var nav = document.getElementById("nav-items");

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

    // Navbar
    function disableNavItems() {
        var items = document.getElementById('nav-items');
        for (var i = 0; i < items.children.length; i++) {
            items.children[i].classList.remove('is-active');
        }
    }

    hamburgerMenu.addEventListener("click", function () {
        var className = nav.getAttribute("class");
        if (className === "nav-right nav-menu") {
            nav.classList.add("is-active");
            hamburgerMenu.classList.add('is-active');
        } else {
            nav.classList.remove("is-active");
            hamburgerMenu.classList.remove('is-active');
        }

    });

    // Pricing Tab
    var pricingTabPersonal = document.getElementById('rdg-tab-personal');
    var pricingTabEnterprise = document.getElementById('rdg-tab-enterprise');
    var pricingPersonal = document.getElementById('rdg-pricing-personal');
    var pricingEnterprise = document.getElementById('rdg-pricing-enterprise');

    pricingTabPersonal.addEventListener('click', function () {
        pricingEnterprise.style.display = 'none';
        pricingPersonal.style.display = 'flex';
        pricingTabPersonal.parentElement.classList.add('is-active');
        pricingTabEnterprise.parentElement.classList.remove('is-active');
    });

    pricingTabEnterprise.addEventListener('click', function () {
        pricingPersonal.style.display = 'none';
        pricingEnterprise.style.display = 'flex';
        pricingTabEnterprise.parentElement.classList.add('is-active');
        pricingTabPersonal.parentElement.classList.remove('is-active');
    });


});