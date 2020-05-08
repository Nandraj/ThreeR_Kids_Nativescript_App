const observableModule = require("tns-core-modules/data/observable");
var TTSModule = require("nativescript-texttospeech");
let TTS = new TTSModule.TNSTextToSpeech();

function ViewModel() {
    var viewModel = observableModule.fromObject({
        months: [
            { name: "कार्तिक" },
            { name: "मार्गशीर्ष" },
            { name: "पौष" },
            { name: "माघ" },
            { name: "फाल्गुन" },
            { name: "चैत्र" },
            { name: "वैशाख" },
            { name: "ज्येष्ठ" },
            { name: "आषाढ़" },
            { name: "श्रावण" },
            { name: "भाद्रपद" },
            { name: "आश्विन" }
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