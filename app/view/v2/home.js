const pagePath = {
    "Alphabets": "view/v2/alphabets/alphabets-page",
    "Numbers": "view/v2/numbers/numbers-page",
    "કલમ": "view/v2/kalam/kalam-page",
    "Days": "view/v2/days/days-page",
    "Months": "view/v2/months/months-page",
    "About": "view/v2/about/about-page",
}

function onTap(args) {
    const labelText = args.object.parent.getChildAt(1).text
    goToPath = pagePath[labelText]
    var navigationEntry = {
        moduleName: goToPath,
        transition: {
            name: "slideBottom"
        }
    }
    const page = args.object.page
    page.frame.navigate(navigationEntry)
}

exports.onTap = onTap