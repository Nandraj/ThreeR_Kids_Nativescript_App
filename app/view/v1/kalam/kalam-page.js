var observableModule = require("tns-core-modules/data/observable");
var TTSModule = require("nativescript-texttospeech");
let TTS = new TTSModule.TNSTextToSpeech();

function viewModel() {
    var viewModel = observableModule.fromObject({
        speakGuj: function (args) {
            let currentSpelling = viewModel.kWord;
            // console.log(currentSpelling);
            let speakOptions = {
                text: currentSpelling,
                locale: 'gu-IN'
            };
            TTS.speak(speakOptions).then(
                () => {
                    console.log("everything is fine");
                },
                (err) => {
                    console.log(err);
                }
            );
        },
        i: 0,
        kLabel: "ક",
        kWord: "કમળ",
        kImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/220px-Sacred_lotus_Nelumbo_nucifera.jpg",
        kLabelList: ["ક", "ખ", "ગ", "ઘ", "ચ", "છ", "જ", "ઝ", "ટ", "ઠ", "ડ", "ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ", "ભ", "મ", "ય", "ર", "લ", "વ", "શ", "ષ", "સ", "હ", "ળ", "ક્ષ", "જ્ઞ"],
        kWordList: ['કમળ', 'ખટારો', 'ગણપતિ', 'ઘર', 'ચકલી', 'છત્રી', 'જગ', 'ઝીરો', 'ટપાલી', 'ઠળીયો', 'ડમરું', 'ઢાલ', 'ફેણ', 'તલવાર', 'થડ', 'દડો', 'ધ્વજ', 'નળ', 'પતંગ', 'ફટાકડા', 'બતક', 'ભમરડો', 'મરચાં', 'યજ્ઞ', 'રમકડા', 'લસણ', 'વહાણ', 'શરણાઈ', 'ષટ્કોણ', 'સસલું', 'હરણ', 'ફળ', 'ક્ષમા', 'જ્ઞાન'],
        kImgList: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/220px-Sacred_lotus_Nelumbo_nucifera.jpg",
            "https://images.financialexpress.com/2019/05/1-718.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51I7cdg9y2L._SY450_.jpg",
            "http://clipart-library.com/images_k/transparent-cartoon-house/transparent-cartoon-house-3.png",
            "https://www.allaboutbirds.org/guide/assets/photo/63742371-720px.jpg",
            "https://babysworld.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/bear-umbrella-voilet_3_.jpg",
            "https://previews.123rf.com/images/manyapeace45/manyapeace451907/manyapeace45190700005/127661939-empty-jug-transparent-outline-style-bowl-images-milk-jug-arabic-jug-milk-bottle-milk-jug-arabic-jug.jpg",
            "https://sciencetrends.com/wp-content/uploads/2018/12/zero.png",
            "http://clipart-library.com/data_images/21766.gif",
            "https://static.turbosquid.com/Preview/001175/794/70/avocado-cut-half-seed-3D-model_DHQ.jpg",
            "https://5.imimg.com/data5/DU/IL/MY-13265386/musical-wood-damroo-500x500.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shield_by_Franc_from_the_Noun_Project.svg/77px-Shield_by_Franc_from_the_Noun_Project.svg.png",
            "https://www.thoughtco.com/thmb/h_zK1wNjXsgWL8lWlgeZnRCekcw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1081539198-da2463161bca4538a0dd0028dbaedebc.jpg",
            "https://www.darksword-armory.com/wp-content/uploads/2018/07/the-vindaaris-sword-fantasy-medieval-weapon-1328-darksword-armory-600x1271.jpg",
            "https://images.unsplash.com/photo-1582408936363-2b9663c2d6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
            "https://5.imimg.com/data5/UI/BD/MY-30984272/single-pole-indian-flag-500x500.jpg",
            "https://www.ikea.com/in/en/images/products/yttran-kitchen-mixer-tap__0756722_PE749055_S5.JPG?f=s",
            "https://5.imimg.com/data5/TV/SU/MY-63424135/paper-kites-500x500.jpg",
            "https://english.cdn.zeenews.com/sites/default/files/2018/10/23/729938-fire-cracker-1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg",
            "https://ae01.alicdn.com/kf/HTB1.BEbbwZC2uNjSZFnq6yxZpXaQ/2PCS-New-High-Quality-Forever-Spin-Metal-Spinning-Top-Spinning-Tops-Built-to-Last-and-Spin.jpg",
            "https://www.bhf.org.uk/-/media/new-site-images/informationsupport/heart-matters/december-2019/news/bth/chilli-peppers/chilli-peppers-300x196-ss-noexp.jpg?h=196&w=300&la=en&hash=C36A84D15C94E49ADC829026381598CA5544A180",
            "https://www.hinduwebsite.com/hinduism/images/brahmanpriest.jpg",
            "https://cdn.vox-cdn.com/thumbor/KMXnHKmDewtejGUQ2HgMUWan69I=/0x0:6953x4750/920x613/filters:focal(2921x1819:4033x2931):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65820406/AdobeStock_259518799.0.jpeg",
            "https://smedia2.intoday.in/aajtak/images/Photo_gallery/022018/d_555_021818095756.jpg",
            "https://loulounillyworldnews.files.wordpress.com/2013/01/img_2626.jpg?w=300&h=224",
            "https://rinay.weebly.com/uploads/2/4/0/6/24061878/621801900.jpg?421",
            "https://img.pngio.com/polygon-shape-icon-polygon-shapes-png-512_512.png",
            "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg",
            "https://dublinohiousa.gov/dev/dev/wp-content/uploads/2018/10/deer-2018.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/220px-Culinary_fruits_front_view.jpg",
            "https://content.thriveglobal.com/wp-content/uploads/2019/04/how-to-forgive.jpeg?w=1550",
            "https://helpiewp.com/wp-content/uploads/2018/06/knowledgebase.jpg"
        ],
        nextItem: function (args) {
            if (viewModel.i < (viewModel.kLabelList.length - 1)) {
                viewModel.i++
                viewModel.kLabel = viewModel.kLabelList[viewModel.i]
                viewModel.kWord = viewModel.kWordList[viewModel.i]
                viewModel.kImg = viewModel.kImgList[viewModel.i]
            }
        },

        prevItem: function (args) {
            if (viewModel.i > 0) {
                viewModel.i--
                viewModel.kLabel = viewModel.kLabelList[viewModel.i]
                viewModel.kWord = viewModel.kWordList[viewModel.i]
                viewModel.kImg = viewModel.kImgList[viewModel.i]
            }
        }

    })

    return viewModel
}

function pageLoaded(args) {
    var page = args.object
    page.bindingContext = new viewModel()
}

exports.pageLoaded = pageLoaded

