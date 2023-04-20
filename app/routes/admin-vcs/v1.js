var v = 'v1/'
var path = '/admin-vcs/'
var pathGet = 'admin-vcs/'
var addService = 'add-service/'
var manageService = 'manage-service/'
var addOrg = 'add-org/'
var addLa = 'add-la/'
var addVcs = 'add-vcs/'
var addBoth = 'add-la-org/'
var addUser = 'add-user/'
var manageUser = 'manage-users/'
var manageOrg = 'manage-org/'
var managePersonalDetails = 'manage-personal-details/'


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

    router.post(path + v + 'forgotten-password', function (req, res) {
        res.redirect(path + v + 'email-sent')
    })

    // add user

    router.post(path + v + addUser + 'user-name', function (req, res) {
        res.redirect(path + v + addUser + 'email-address')
    })

    router.post(path + v + addUser + 'type-of-user', function (req, res) {
        if (req.session.data.userType === 'Bristol City Council administrator') {
            res.redirect(path + v + addUser + 'user-name')
        }
        if (req.session.data.userType === 'Voluntary community organisation administrator') {
            res.redirect(path + v + addUser + 'what-vcs')
        }
        if (req.session.data.userType === 'Professional') {
            res.redirect(path + v + addUser + 'user-name')
        }
    })

    router.post(path + v + addUser + 'email-address', function (req, res) {
        res.redirect(path + v + addUser + 'check-details')
    })

    router.post(path + v + addUser + 'check-details', function (req, res) {
        res.redirect(path + v + addUser + 'confirmation')
    })

    // delete user

    router.post(path + v + manageUser + 'remove-ben-smith', function (req, res) {
        if (req.session.data.removeUser === 'Yes') {
            res.redirect(path + v + manageUser + 'remove-confirmation')
        }
        if (req.session.data.removeUser === 'No') {
            res.redirect(path + v + manageUser + 'not-removed')
        }
    })

    // Pages for add services

    router.get(path + v + addService + 'change-service-name', function (req, res) {
        req.session.data.changeServiceName = true
        res.redirect(path + v + addService + 'service-name')
    })

    router.post(path + v + addService + 'service-name', function (req, res) {
        if (req.session.data.changeServiceName === true) {
            req.session.data.changeServiceName = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'type-of-support')
        }
    })

    router.get(path + v + addService + 'change-type-of-support', function (req, res) {
        req.session.data.changeSupport = true
        res.redirect(path + v + addService + 'type-of-support')
    })

    router.post(path + v + addService + 'type-of-support', function (req, res) {
        // req.session.data.supportArray = req.session.data['category-1'].concat(req.session.data['category-2'], req.session.data['category-3'], req.session.data['category-4'], req.session.data['category-5'], req.session.data['category-6'])
        if (req.session.data.changeSupport === true) {
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'delivery-type')
        }
    })

    router.get(path + v + addService + 'change-sub-type-of-support', function (req, res) {
        req.session.data.changeSupport = true
        res.redirect(path + v + addService + 'sub-type-of-support')
    })

    router.post(path + v + addService + 'sub-type-of-support', function (req, res) {
        if (req.session.data.changeSupport === true) {
            req.session.data.changeSupport = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'delivery-type')
        }
    })

    router.get(path + v + addService + 'change-delivery-type', function (req, res) {
        req.session.data.changeDeliveryType = true
        res.redirect(path + v + addService + 'delivery-type')
    })

    router.post(path + v + addService + 'delivery-type', function (req, res) {
        if (req.session.data.changeDeliveryType === true) {
            req.session.data.deliveryString = req.session.data.delivery.toString();
            req.session.data.deliveryString = req.session.data.deliveryString.replace(/,/g, ', ');
            if (req.session.data.delivery.includes('In person')) {
                req.session.data.inPerson = true
                res.redirect(path + v + addService + 'in-person-where')
            } else {
                req.session.data.changeDeliveryType = false
                res.redirect(path + v + addService + 'check-service-details')
            }
        }
        else {
            req.session.data.deliveryString = req.session.data.delivery.toString();
            req.session.data.deliveryString = req.session.data.deliveryString.replace(/,/g, ', ');
            if (req.session.data.delivery.includes('In person')) {
                req.session.data.inPerson = true
                res.redirect(path + v + addService + 'in-person-where')
            } else {
                res.redirect(path + v + addService + 'who-for')
            }
        }
    })

    router.get(path + v + addService + 'change-in-person-where', function (req, res) {
        req.session.data.changeDeliveryType2 = true
        res.redirect(path + v + addService + 'in-person-where')
    })

    router.post(path + v + addService + 'in-person-where', function (req, res) {
        if (req.session.data.changeDeliveryType2 === true) {
            req.session.data.changeDeliveryType = false
            req.session.data.changeDeliveryType2 = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        if (req.session.data.changeDeliveryType === true) {
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'who-for')
        }
    })

    router.get(path + v + addService + 'change-offer-at-familys-place', function (req, res) {
        req.session.data.changeDeliveryType = true
        res.redirect(path + v + addService + 'offer-at-familys-place')
    })

    router.post(path + v + addService + 'offer-at-familys-place', function (req, res) {
        if (req.session.data.changeDeliveryType === true) {
            req.session.data.changeDeliveryType = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'who-for')
        }
    })

    router.get(path + v + addService + 'change-who-for', function (req, res) {
        req.session.data.changeWhoFor = true
        res.redirect(path + v + addService + 'who-for')
    })

    router.post(path + v + addService + 'who-for', function (req, res) {
        if (req.session.data.children === 'Yes') {
            req.session.data.childrenAndYoungPeople = true
        }
        else {
            req.session.data.childrenAndYoungPeople = null
        }
        if (req.session.data.changeWhoFor === true) {
            req.session.data.changeWhoFor = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'what-language')
        }
    })

    router.get(path + v + addService + 'change-what-language', function (req, res) {
        req.session.data.changeLanguage = true
        res.redirect(path + v + addService + 'what-language')
    })

    router.post(path + v + addService + 'what-language', function (req, res) {
        req.session.data.languageString = req.session.data.chooseLanguage.toString();
        req.session.data.languageString = req.session.data.languageString.replace(/,/g, ', ');
        if (req.session.data.changeLanguage === true) {
            req.session.data.changeLanguage = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'pay-for-service')
        }
    })

    router.get(path + v + addService + 'change-pay-for-service', function (req, res) {
        req.session.data.changePayForService = true
        res.redirect(path + v + addService + 'pay-for-service')
    })

    router.post(path + v + addService + 'pay-for-service', function (req, res) {
        if (req.session.data.changePayForService === true) {
            req.session.data.changePayForService = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'contact-details')
        }
    })

    router.get(path + v + addService + 'change-contact-details', function (req, res) {
        req.session.data.changeContactDetails = true
        res.redirect(path + v + addService + 'contact-details')
    })

    router.post(path + v + addService + 'contact-details', function (req, res) {
        if (req.session.data.changeContactDetails === true) {
            req.session.data.changeContactDetails = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'service-description')
        }
    })

    router.get(path + v + addService + 'change-service-description', function (req, res) {
        req.session.data.changeDescription = true
        res.redirect(path + v + addService + 'service-description')
    })

    router.post(path + v + addService + 'service-description', function (req, res) {
        if (req.session.data.changeDescription === true) {
            req.session.data.changeDescription = false
            res.redirect(path + v + addService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addService + 'check-service-details')
        }
    })

    router.post(path + v + addService + 'check-service-details', function (req, res) {
        res.redirect(path + v + addService + 'confirmation')
    })

    router.post(path + v + addService + 'confirmation', function (req, res) {
        req.session.data = []
        res.redirect(path + v + 'homepage')
    })

    // Pages for manage services

    router.post(path + v + manageService + 'remove-service', function (req, res) {
        if (req.session.data.remove === 'yes') {
            res.redirect(path + v + manageService + 'remove-confirmation')
        }
        if (req.session.data.remove === 'no') {
            res.redirect(path + v + manageService + 'not-removed')
        }
    })

    router.post(path + v + manageService + 'remove-confirmation', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + manageService + 'view-edit', function (req, res) {
        res.redirect(path + v + manageService + 'edit-saved')
    })

    router.post(path + v + manageService + 'edit-saved', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    // email related redirects

    router.post(path + v + managePersonalDetails + 'reset-password', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'password-reset')
    })

    router.post(path + v + managePersonalDetails + 'set-password', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'password-set')
    })
}