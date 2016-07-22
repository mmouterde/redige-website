document.addEventListener("DOMContentLoaded", function (event) {
    smoothScroll.init({
        offset: "50px"
    });
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