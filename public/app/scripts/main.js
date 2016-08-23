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

function handleDownloadClicks(event) {
    ga('send', 'event', {
        eventCategory: 'cta',
        eventAction: 'click',
        eventLabel: event.target.href
    });
}
document.getElementsByTagName('video')[0].addEventListener("playing", function () {
    ga('send', 'event', {
        eventCategory: 'Video',
        eventAction: 'play',
        eventLabel: 'play'
    });
});