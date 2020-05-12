let observableModule = require("tns-core-modules/data/observable")
let colorPickerModule = require("nativescript-color-picker")
let colorModule = require("color")

let colorPicker = new colorPickerModule.ColorPicker()

function ViewModel() {
    let viewModel = observableModule.fromObject({
        i: 0,
        labelValue: "ક",
        penColor: '#2ebf91',
        penWidth: 15,
        clearPad: function (args) {
            args.object.page.getViewById('drawingPad').clearDrawing()
        },
        showColorPicker: function (args) {
            colorPicker.show('#2ebf91', 'RGB').then((result) => {
                viewModel.penColor = new colorModule.Color(result);
            }).catch((err) => {
                console.log(err)
            })
        },
        nextLabel: function (args) {
            if (viewModel.i < viewModel.labelValueList.length - 1) {
                viewModel.i++
                viewModel.labelValue = viewModel.labelValueList[viewModel.i]
                args.object.page.getViewById('drawingPad').clearDrawing()
            }
        },
        prevLabel: function (args) {
            if (viewModel.i > 0) {
                viewModel.i--
                viewModel.labelValue = viewModel.labelValueList[viewModel.i]
                args.object.page.getViewById('drawingPad').clearDrawing()
            }
        },
        labelValueList: ["ક", "ખ", "ગ", "ઘ", "ચ", "છ", "જ", "ઝ", "ટ", "ઠ", "ડ", "ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ", "ભ", "મ", "ય", "ર", "લ", "વ", "શ", "ષ", "સ", "હ", "ળ", "ક્ષ", "જ્ઞ"],
    })
    return viewModel
}

function pageLoaded(args) {
    const page = args.object
    page.bindingContext = new ViewModel()
}

exports.pageLoaded = pageLoaded