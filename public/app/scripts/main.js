document.addEventListener("DOMContentLoaded", function () {
    smoothScroll.init({
        offset: "50px"
    });
});

conditionizr.load('./app/styles/osWindows.css', ['windows']);
conditionizr.load('./app/styles/osLinux.css', ['linux']);
conditionizr.load('./app/styles/osMac.css', ['mac']);

if (!conditionizr.windows && !conditionizr.linux && !conditionizr.mac) {
    conditionizr.load('./app/styles/osNone.css', []);
}

