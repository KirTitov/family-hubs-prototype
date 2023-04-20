var v = 'v4/'
var path = '/add-service/'
var pathGet = 'add-service/'
var addService = 'add-service/'

var months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'
]

function monthNumToName (monthnum) {
    return months[monthnum - 1] || ''
}

function numberWithCommas (x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x)) { x = x.replace(pattern, '$1,$2') }
    return x
}

module.exports = function (router) {

    // Start page

    router.get(path + v + 'index', function (req, res) {
        req.session.data = []
        res.redirect(path + v + 'start')
    })

    router.post(path + v + 'start', function (req, res) {
        res.redirect(path + v + 'sign-in')
    })

    router.post(path + v + 'sign-in', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + addService + 'which-organisation', function (req, res) {
        res.redirect(path + v + addService + 'service-name')
    })

    router.post(path + v + addService + 'service-name', function (req, res) {
        res.redirect(path + v + addService + 'type-of-support')
    })

    router.post(path + v + addService + 'type-of-support', function (req, res) {
        res.redirect(path + v + addService + 'sub-type-of-support')
    })

    router.post(path + v + addService + 'sub-type-of-support', function (req, res) {
        res.redirect(path + v + addService + 'delivery-type')
    })

    router.post(path + v + addService + 'delivery-type', function (req, res) {
        req.session.data.deliveryString = req.session.data.delivery.toString();
        req.session.data.deliveryString = req.session.data.deliveryString.replace(/,/g, ', ');
        if (req.session.data.delivery.includes('In person')){
            res.redirect(path + v + addService + 'in-person-where')
        }
        else {
            res.redirect(path + v + addService + 'who-for')
        }
    })

    router.post(path + v + addService + 'in-person-where', function (req, res) {
        // req.session.data.locationString = req.session.data.location.toString();
        // req.session.data.locationString = req.session.data.locationString.replace(/,/g, ', ');
        // if (req.session.data.location.includes('Yes')){
        //     req.session.data.ownLocation = true
        // }
        res.redirect(path + v + addService + 'offer-at-familys-place')
    })

    router.post(path + v + addService + 'offer-at-familys-place', function (req, res) {
        res.redirect(path + v + addService + 'who-for')
    })

    router.post(path + v + addService + 'who-for', function (req, res) {
        // req.session.data.ageString = req.session.data.age.toString();
        // req.session.data.ageString = req.session.data.ageString.replace(/,/g, ', ');
        // if (req.session.data.age.includes('Children and young people')){
        //     req.session.data.childrenAndYoungPeople = true
        // }
        if (req.session.data.children === 'Yes') {
            req.session.data.childrenAndYoungPeople = true
        }
        else {
            req.session.data.childrenAndYoungPeople = null
        }
        res.redirect(path + v + addService + 'what-language')
    })

    router.post(path + v + addService + 'what-language', function (req, res) {
        req.session.data.languageString = req.session.data.chooseLanguage.toString();
        req.session.data.languageString = req.session.data.languageString.replace(/,/g, ', ');
        res.redirect(path + v + addService + 'pay-for-service')
    })

    router.post(path + v + addService + 'pay-for-service', function (req, res) {
        res.redirect(path + v + addService + 'contact-details')
    })

    router.post(path + v + addService + 'contact-details', function (req, res) {
        res.redirect(path + v + addService + 'service-description')
    })

    router.post(path + v + addService + 'service-description', function (req, res) {
        res.redirect(path + v + addService + 'check-service-details')
    })

    router.post(path + v + addService + 'check-service-details', function (req, res) {
        res.redirect(path + v + addService + 'confirmation')
    })

    router.post(path + v + addService + 'confirmation', function (req, res) {
        req.session.data = []
        res.redirect(path + v + 'homepage')
    })
}