let observableModule = require("tns-core-modules/data/observable")
let colorPickerModule = require("nativescript-color-picker")
let colorModule = require("color")
const imageSourceModule = require("tns-core-modules/image-source")
const fileSystemModule = require("tns-core-modules/file-system");
var directory = android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString()
var dialogs = require("tns-core-modules/ui/dialogs")
const permissions = require("nativescript-permissions")

let colorPicker = new colorPickerModule.ColorPicker()

function ViewModel() {
    let viewModel = observableModule.fromObject({
        penColor: '#2ebf91',
        penWidth: 1,
        storageWritePermission: false,
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
        saveImage: function (args) {
            function doSaveProcess() {
                const folderPath = fileSystemModule.path.join(directory, "3RKids")
                const doesExist = fileSystemModule.Folder.exists(folderPath)
                if (!doesExist) {
                    new fileSystemModule.Folder.fromPath(folderPath)
                }
                const drawingPad = args.object.page.getViewById("drawingPad")
                drawingPad.getDrawing().then((image) => {
                    dialogs.prompt({
                        title: "Drawing Name",
                        okButtonText: "Ok",
                        cancelButtonText: "Cancel",
                        defaultText: "",
                        inputType: dialogs.inputType.text
                    }).then((nameInput) => {
                        if (nameInput.text.length > 0) {
                            const imageSource = new imageSourceModule.ImageSource(image);
                            const fileName = nameInput.text + ".png"
                            const filePath = fileSystemModule.path.join(folderPath, fileName);
                            const saved = imageSource.saveToFile(filePath, "png");
                            if (saved) {
                                dialogs.alert({
                                    title: "Success",
                                    message: "Drawing saved at\nInternal Storage > 3RKids",
                                    okButtonText: "OK"
                                })
                            }
                        } else {
                            dialogs.alert({
                                title: "Name Empty",
                                message: "Drawing name can not be empty!",
                                okButtonText: "OK"
                            })
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                    dialogs.alert({
                        title: "Error",
                        message: "Sorry, unable to save your drawing\nMay be its blank!",
                        okButtonText: "OK"
                    })
                })
            }

            if (!viewModel.storageWritePermission) {
                if (!permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                    permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, "App needs storage write permission to save drawings!")
                        .then(() => {
                            viewModel.storageWritePermission = true
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    viewModel.storageWritePermission = true
                    doSaveProcess()
                }
            } else {
                doSaveProcess()
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