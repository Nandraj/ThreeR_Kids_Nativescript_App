var observableModule = require("tns-core-modules/data/observable");
var TTSModule = require("nativescript-texttospeech");
let TTS = new TTSModule.TNSTextToSpeech();

function numberSpeak(wordToSpeak, localCode) {
    let speakOptions = {
        text: wordToSpeak,
        locale: localCode
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

function viewModel() {
    var viewModel = observableModule.fromObject({
        i: 0,
        engNum: "1",
        engWord: "One",
        gujNum: "૧",
        gujWord: "એક",
        hindiNum: "१",
        hindiWord: "एक",
        engNumList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        engWordList: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
        gujNumList: ["૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯", "૧૦"],
        gujWordList: ["એક", "બે", "ત્રણ", "ચાર", "પાંચ", "છ", "સાત", "આઠ", "નવ", "દસ"],
        hindiNumList: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
        hindiWordList: ["एक", "दो", "तीन", "चार", "पांच", "छे", "सात", "आठ", "नो", "दस"],
        nextNum: function (args) {
            if (viewModel.i < (viewModel.engNumList.length - 1)) {
                viewModel.i++
                viewModel.engNum = viewModel.engNumList[viewModel.i]
                viewModel.engWord = viewModel.engWordList[viewModel.i]
                viewModel.gujNum = viewModel.gujNumList[viewModel.i]
                viewModel.gujWord = viewModel.gujWordList[viewModel.i]
                viewModel.hindiNum = viewModel.hindiNumList[viewModel.i]
                viewModel.hindiWord = viewModel.hindiWordList[viewModel.i]
            }
        },

        prevNum: function (args) {
            if (viewModel.i > 0) {
                viewModel.i--
                viewModel.engNum = viewModel.engNumList[viewModel.i]
                viewModel.engWord = viewModel.engWordList[viewModel.i]
                viewModel.gujNum = viewModel.gujNumList[viewModel.i]
                viewModel.gujWord = viewModel.gujWordList[viewModel.i]
                viewModel.hindiNum = viewModel.hindiNumList[viewModel.i]
                viewModel.hindiWord = viewModel.hindiWordList[viewModel.i]
            }
        },
        onEngLabelTap: function (args) {
            const text = viewModel.engWord
            numberSpeak(text, 'en-IN')
        },
        onGujLabelTap: function (args) {
            const text = viewModel.gujWord
            numberSpeak(text, 'gu-IN')
        },
        onHinLabelTap: function (args) {
            const text = viewModel.hindiWord
            numberSpeak(text, 'hi-IN')
        },

    })

    return viewModel
}

function pageLoaded(args) {
    var page = args.object
    page.bindingContext = new viewModel()
}

exports.pageLoaded = pageLoaded

