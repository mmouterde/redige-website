NodeList.prototype.forEach = Array.prototype.forEach;

var version = "0.0.9";
var winURL = "http://5.135.228.103/files/Redige-win32-x64-installer/RedigeSetup.exe";
var linURL = "http://5.135.228.103/files/Redige-linux-x64_" + version + ".tar.gz";
var macURL = "http://5.135.228.103/files/Redige-darwin-x64_" + version + ".zip";
var currentURL = winURL;

document.addEventListener("DOMContentLoaded", function () {
    smoothScroll.init({
        offset: "50px"
    });
});

if (conditionizr.windows) {
    currentURL = winURL;
} else if (conditionizr.linux) {
    currentURL = linURL;
} else if (conditionizr.mac) {
    currentURL = macURL;
}

var links = document.querySelectorAll('.download-button');
[].forEach.call(links, function (link) {
    link.href = currentURL;
});

document.getElementById('download-button-mac').href = macURL;
document.getElementById('download-button-win').href = winURL;
document.getElementById('download-button-lin').href = linURL;

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