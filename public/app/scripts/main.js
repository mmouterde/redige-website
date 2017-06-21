NodeList.prototype.forEach = Array.prototype.forEach;

var version = "0.2.5";
var winURL = "http://download.redige.net/files/Redige-win32-x64-installer/Redige Setup " + version + ".exe";
var linURL = "http://download.redige.net/files/redigeApp-" + version + "-x86_64.AppImage";
var macURL = "http://download.redige.net/files/Redige-darwin-x64_0.0.10.zip";
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

document.getElementById('download-button').href = currentURL;
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