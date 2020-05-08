const observableModule = require("tns-core-modules/data/observable");
var TTSModule = require("nativescript-texttospeech");
let TTS = new TTSModule.TNSTextToSpeech();

function ViewModel() {
    var viewModel = observableModule.fromObject({
        months: [
            { name: "सोमवार" },
            { name: "मंगलवार" },
            { name: "बुधवार" },
            { name: "गुरूवार" },
            { name: "शुक्रवार" },
            { name: "शनिवार" },
            { name: "रविवार" },
        ],
        onItemTap: function (args) {
            let currentSpelling = viewModel.months[args.index]["name"]
            let speakOptions = {
                text: currentSpelling,
                locale: "hi-IN"
            };
            TTS.speak(speakOptions).then(
                () => {
                    console.log("everything is fine");
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    })
    return viewModel
}

exports.pageLoaded = (args) => {
    var page = args.object;
    page.bindingContext = new ViewModel()
}