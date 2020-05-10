let observableModule = require("tns-core-modules/data/observable");
let colorPickerModule = require("nativescript-color-picker");
let colorModule = require("color")

let colorPicker = new colorPickerModule.ColorPicker()

function ViewModel() {
    let viewModel = observableModule.fromObject({
        penColor: '#2ebf91',
        penWidth: 1,
        clearPad: function (args) {
            args.object.page.getViewById('drawingPad').clearDrawing()
        },
        showColorPicker: function (args) {
            colorPicker.show('#2ebf91', 'RGB').then((result) => {
                viewModel.penColor = new colorModule.Color(result);
            }).catch((err) => {
                console.log(err)
            })
        }
    })
    return viewModel
}

function pageLoaded(args) {
    const page = args.object
    page.bindingContext = new ViewModel()
}

exports.pageLoaded = pageLoaded