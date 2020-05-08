// var Youtube = require("nativescript-open-youtube").Youtube;
// var youtube = new Youtube();
const phone = require("nativescript-phone");
const email = require("nativescript-email");
const utilsModule = require("tns-core-modules/utils/utils");


// function openYtubeChannel(args) {
//     youtube.open('UCK7WkRvftl2ouoL9Y1IRw-w');
// }

// exports.openYtubeChannel = openYtubeChannel

function doPhoneCall(args) {
    phone.dial("919737716562", true)
}

function sendEmail(args) {
    email.compose({
        to: ['3rclasses@gmail.com'],
    }).then(
        function () {
            console.log("Email composer closed");
        }, function (err) {
            console.log("Error: " + err);
        });
}

function openInstagram(args) {
    const url = "https://www.instagram.com/3rclasses/"
    utilsModule.openUrl(url)
}

function openYtubeChannel(args) {
    const url = "https://www.youtube.com/channel/UCb4wRBoqGo6vgJjMbrzi3Fg"
    utilsModule.openUrl(url)
}

function openWhatsapp(args) {
    const url = "https://api.whatsapp.com/send?phone=919737716562"
    utilsModule.openUrl(url)
}

exports.doPhoneCall = doPhoneCall
exports.sendEmail = sendEmail
exports.openInstagram = openInstagram
exports.openYtubeChannel = openYtubeChannel
exports.openWhatsapp = openWhatsapp