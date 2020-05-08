var observableModule = require("tns-core-modules/data/observable");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function ViewModel() {
    var viewModel = observableModule.fromObject({
        firstNum: 3,
        symbol: "+",
        secondNum: 6,
        comment: "",
        answer: "",
        newSum: function () {
            viewModel.firstNum = randomNumber(1, 9)
            viewModel.secondNum = randomNumber(1, 9)
            viewModel.comment = ""
            viewModel.answer = ""
        },
        showAns: function () {
            let ans = eval(String(viewModel.firstNum) + "+" + String(viewModel.secondNum))
            viewModel.answer = ans
        },
        checkAns: function () {
            let ans = eval(String(viewModel.firstNum) + "+" + String(viewModel.secondNum))
            if (String(viewModel.answer).length > 0) {
                if (String(ans) === String(viewModel.answer)) {
                    viewModel.comment = "Correct! Very Good!"
                } else {
                    viewModel.comment = `Incorrect! correct answer is ${ans}`
                }
            } else {
                viewModel.comment = "Invalid Input!"
            }
        }
    })
    return viewModel
}

function pageLoaded(args) {
    const page = args.object
    page.bindingContext = new ViewModel()
}

exports.pageLoaded = pageLoaded