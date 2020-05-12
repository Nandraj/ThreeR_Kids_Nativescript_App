let observableModule = require("tns-core-modules/data/observable")
let colorPickerModule = require("nativescript-color-picker")
let colorModule = require("color")

let colorPicker = new colorPickerModule.ColorPicker()

function ViewModel() {
    let viewModel = observableModule.fromObject({
        i: 0,
        labelValue: "1",
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
        labelValueList: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    })
    return viewModel
}

function pageLoaded(args) {
    const page = args.object
    page.bindingContext = new ViewModel()
}

exports.pageLoaded = pageLoaded