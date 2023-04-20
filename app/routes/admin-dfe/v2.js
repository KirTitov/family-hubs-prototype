var v = 'v2/'
var path = '/admin-dfe/'
var pathGet = 'admin-dfe/'
var addService = 'add-service/'
var addLaService = 'add-la-service/'
var manageService = 'manage-service/'
var manageLaService = 'manage-la-service/'
var addHub = 'add-la-fh/'
var manageHub = 'manage-la-fh/'
var addOrg = 'add-org/'
var addLa = 'add-la/'
var enableLa = 'enable-la/'
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

    //add org

    router.post(path + v + addOrg + 'org-name', function (req, res) {
        res.redirect(path + v + addOrg + 'type-of-organisation')
    })

    router.post(path + v + addOrg + 'type-of-organisation', function (req, res) {
        if (req.session.data.orgType === 'Local authority') {
            res.redirect(path + v + addOrg + 'check-details')
        }
        if (req.session.data.orgType === 'Voluntary and community sector') {
            res.redirect(path + v + addOrg + 'what-local-authority')
        }
    })

    router.post(path + v + addOrg + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addOrg + 'check-details')
    })

    router.post(path + v + addOrg + 'check-details', function (req, res) {
        res.redirect(path + v + addOrg + 'confirmation')
    })

    // add LA (if we split it out)

    router.post(path + v + addLa + 'org-name', function (req, res) {
        res.redirect(path + v + addLa + 'check-details')
    })

    router.post(path + v + addLa + 'check-details', function (req, res) {
        res.redirect(path + v + addLa + 'confirmation')
    })

    // add VCS (if we split it out)

    router.post(path + v + addVcs + 'org-name', function (req, res) {
        res.redirect(path + v + addVcs + 'what-local-authority')
    })

    router.post(path + v + addVcs + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addVcs + 'check-details')
    })

    router.post(path + v + addVcs + 'check-details', function (req, res) {
        res.redirect(path + v + addVcs + 'confirmation')
    })

    // add La OR VCS

    router.post(path + v + addBoth + 'type-of-organisation', function (req, res) {
        if (req.session.data.orgType === 'Local authority') {
            res.redirect(path + v + addBoth + 'org-name')
        }
        if (req.session.data.orgType === 'Voluntary and community sector') {
            res.redirect(path + v + addBoth + 'what-local-authority')
        }
    })

    router.post(path + v + addBoth + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addBoth + 'org-name')
    })

    router.post(path + v + addBoth + 'local-authority-vcs', function (req, res) {
        res.redirect(path + v + addBoth + 'org-name')
    })

    router.post(path + v + addBoth + 'org-name', function (req, res) {
        res.redirect(path + v + addBoth + 'check-details')
    })

    router.post(path + v + addBoth + 'check-details', function (req, res) {
        res.redirect(path + v + addBoth + 'confirmation')
    })

    //add org

    router.post(path + v + addOrg + 'org-name', function (req, res) {
        res.redirect(path + v + addOrg + 'type-of-organisation')
    })

    router.post(path + v + addOrg + 'type-of-organisation', function (req, res) {
        if (req.session.data.orgType === 'Local authority') {
            res.redirect(path + v + addOrg + 'check-details')
        }
        if (req.session.data.orgType === 'Voluntary and community sector') {
            res.redirect(path + v + addOrg + 'what-local-authority')
        }
    })

    router.post(path + v + addOrg + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addOrg + 'check-details')
    })

    router.post(path + v + addOrg + 'check-details', function (req, res) {
        res.redirect(path + v + addOrg + 'confirmation')
    })

    // add user

    router.post(path + v + addUser + 'user-name', function (req, res) {
        res.redirect(path + v + addUser + 'email-address')
    })

    router.post(path + v + addUser + 'type-of-user', function (req, res) {
        if (req.session.data.userType === 'Local authority administrator') {
            res.redirect(path + v + addUser + 'what-local-authority')
        }
        if (req.session.data.userType === 'Voluntary community organisation administrator') {
            res.redirect(path + v + addUser + 'local-authority-vcs')
        }
        if (req.session.data.userType === 'Professional') {
            res.redirect(path + v + addUser + 'what-local-authority-prof')
        }
        if (req.session.data.userType === 'Department for Education administrator') {
            res.redirect(path + v + addUser + 'user-name')
        }
    })

    router.post(path + v + addUser + 'local-authority-vcs', function (req, res) {
        res.redirect(path + v + addUser + 'what-vcs')
    })

    router.post(path + v + addUser + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addUser + 'user-name')
    })

    router.post(path + v + addUser + 'what-local-authority-prof', function (req, res) {
        res.redirect(path + v + addUser + 'user-name')
    })

    router.post(path + v + addUser + 'what-vcs', function (req, res) {
        res.redirect(path + v + addUser + 'user-name')
    })

    router.post(path + v + addUser + 'email-address', function (req, res) {
        res.redirect(path + v + addUser + 'check-details')
    })

    router.post(path + v + addUser + 'check-details', function (req, res) {
        res.redirect(path + v + addUser + 'confirmation')
    })

    // manage LA user

    router.post(path + v + manageUser + 'remove-ben-smith', function (req, res) {
        if (req.session.data.removeUser === 'Yes') {
            res.redirect(path + v + manageUser + 'remove-confirmation')
        }
        if (req.session.data.removeUser === 'No') {
            res.redirect(path + v + manageUser + 'not-removed')
        }
    })

    // manage VCS org

    router.post(path + v + manageOrg + 'remove-home-start', function (req, res) {
        if (req.session.data.removeOrg === 'Yes') {
            res.redirect(path + v + manageOrg + 'remove-confirmation')
        }
        if (req.session.data.removeOrg === 'No') {
            res.redirect(path + v + manageOrg + 'not-removed')
        }
    })

    // manage personal details

    router.post(path + v + managePersonalDetails + 'change-email', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'confirm-email')
    })

    router.post(path + v + managePersonalDetails + 'change-name', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'name-changed')
    })

    router.post(path + v + managePersonalDetails + 'change-password', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'password-changed')
    })

    // email related redirects

    router.post(path + v + managePersonalDetails + 'reset-password', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'password-reset')
    })

    router.post(path + v + managePersonalDetails + 'set-password', function (req, res) {
        res.redirect(path + v + managePersonalDetails + 'password-set')
    })

    // Pages for add services

    router.post(path + v + addService + 'local-authority-vcs', function (req, res) {
        res.redirect(path + v + addService + 'what-vcs')
    })

    router.post(path + v + addService + 'what-vcs', function (req, res) {
        res.redirect(path + v + addService + 'service-name')
    })

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
                res.redirect(path + v + addService + 'days-service-is-open')
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
            res.redirect(path + v + addService + 'days-service-is-open')
        }
    })

    router.post(path + v + addService + 'days-service-is-open', function (req, res) {
        req.session.data.daysString = req.session.data.opening.toString();
        req.session.data.daysString = req.session.data.daysString.replace(/,/g, ', ');
        if (req.session.data.daysString.includes(',')) {
            res.redirect(path + v + addService + 'same-hours-daily')
        }
        else {
            res.redirect(path + v + addService + 'hours-for-each-day')
        }
    })

    router.post(path + v + addService + 'same-hours-daily', function (req, res) {
        if (req.session.data['same-hours'] === 'Yes') {
            res.redirect(path + v + addService + 'hours-for-each-day')
        }
        if (req.session.data['same-hours'] === 'No') {
            res.redirect(path + v + addService + 'hours-for-each-day')
        }
    })

    router.post(path + v + addService + 'hours-for-each-day', function (req, res) {
        res.redirect(path + v + addService + 'who-for')
    })

    // router.get(path + v + addService + 'change-offer-at-familys-place', function (req, res) {
    //     req.session.data.changeDeliveryType = true
    //     res.redirect(path + v + addService + 'offer-at-familys-place')
    // })
    //
    // router.post(path + v + addService + 'offer-at-familys-place', function (req, res) {
    //     if (req.session.data.changeDeliveryType === true) {
    //         req.session.data.changeDeliveryType = false
    //         res.redirect(path + v + addService + 'check-service-details')
    //     }
    //     else {
    //         res.redirect(path + v + addService + 'who-for')
    //     }
    // })

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

    // Pages for add services

    router.post(path + v + addLaService + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addLaService + 'service-name')
    })

    router.get(path + v + addLaService + 'change-service-name', function (req, res) {
        req.session.data.changeServiceName = true
        res.redirect(path + v + addLaService + 'service-name')
    })

    router.post(path + v + addLaService + 'service-name', function (req, res) {
        if (req.session.data.changeServiceName === true) {
            req.session.data.changeServiceName = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'type-of-support')
        }
    })

    router.get(path + v + addLaService + 'change-type-of-support', function (req, res) {
        req.session.data.changeSupport = true
        res.redirect(path + v + addLaService + 'type-of-support')
    })

    router.post(path + v + addLaService + 'type-of-support', function (req, res) {
        // req.session.data.supportArray = req.session.data['category-1'].concat(req.session.data['category-2'], req.session.data['category-3'], req.session.data['category-4'], req.session.data['category-5'], req.session.data['category-6'])
        if (req.session.data.changeSupport === true) {
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'delivery-type')
        }
    })

    router.get(path + v + addLaService + 'change-sub-type-of-support', function (req, res) {
        req.session.data.changeSupport = true
        res.redirect(path + v + addLaService + 'sub-type-of-support')
    })

    router.post(path + v + addLaService + 'sub-type-of-support', function (req, res) {
        if (req.session.data.changeSupport === true) {
            req.session.data.changeSupport = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'delivery-type')
        }
    })

    router.get(path + v + addLaService + 'change-delivery-type', function (req, res) {
        req.session.data.changeDeliveryType = true
        res.redirect(path + v + addLaService + 'delivery-type')
    })

    router.post(path + v + addLaService + 'delivery-type', function (req, res) {
        if (req.session.data.changeDeliveryType === true) {
            req.session.data.deliveryString = req.session.data.delivery.toString();
            req.session.data.deliveryString = req.session.data.deliveryString.replace(/,/g, ', ');
            if (req.session.data.delivery.includes('In person')) {
                req.session.data.inPerson = true
                res.redirect(path + v + addLaService + 'in-person-where')
            } else {
                req.session.data.changeDeliveryType = false
                res.redirect(path + v + addLaService + 'check-service-details')
            }
        }
        else {
            req.session.data.deliveryString = req.session.data.delivery.toString();
            req.session.data.deliveryString = req.session.data.deliveryString.replace(/,/g, ', ');
            if (req.session.data.delivery.includes('In person')) {
                req.session.data.inPerson = true
                res.redirect(path + v + addLaService + 'in-person-where')
            } else {
                res.redirect(path + v + addLaService + 'days-service-is-open')
            }
        }
    })

    router.get(path + v + addLaService + 'change-in-person-where', function (req, res) {
        req.session.data.changeDeliveryType2 = true
        res.redirect(path + v + addLaService + 'in-person-where')
    })

    router.post(path + v + addLaService + 'in-person-where', function (req, res) {
        if (req.session.data.changeDeliveryType2 === true) {
            req.session.data.changeDeliveryType = false
            req.session.data.changeDeliveryType2 = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        if (req.session.data.changeDeliveryType === true) {
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'days-service-is-open')
        }
    })

    router.post(path + v + addLaService + 'days-service-is-open', function (req, res) {
        req.session.data.daysString = req.session.data.opening.toString();
        req.session.data.daysString = req.session.data.daysString.replace(/,/g, ', ');
        if (req.session.data.daysString.includes(',')) {
            res.redirect(path + v + addLaService + 'same-hours-daily')
        }
        else {
            res.redirect(path + v + addLaService + 'hours-for-each-day')
        }
    })

    router.post(path + v + addLaService + 'same-hours-daily', function (req, res) {
        if (req.session.data['same-hours'] === 'Yes') {
            res.redirect(path + v + addLaService + 'hours-for-each-day')
        }
        if (req.session.data['same-hours'] === 'No') {
            res.redirect(path + v + addLaService + 'hours-for-each-day')
        }
    })

    router.post(path + v + addLaService + 'hours-for-each-day', function (req, res) {
        res.redirect(path + v + addLaService + 'who-for')
    })

    router.get(path + v + addLaService + 'change-who-for', function (req, res) {
        req.session.data.changeWhoFor = true
        res.redirect(path + v + addLaService + 'who-for')
    })

    router.post(path + v + addLaService + 'who-for', function (req, res) {
        if (req.session.data.children === 'Yes') {
            req.session.data.childrenAndYoungPeople = true
        }
        else {
            req.session.data.childrenAndYoungPeople = null
        }
        if (req.session.data.changeWhoFor === true) {
            req.session.data.changeWhoFor = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'what-language')
        }
    })

    router.get(path + v + addLaService + 'change-what-language', function (req, res) {
        req.session.data.changeLanguage = true
        res.redirect(path + v + addLaService + 'what-language')
    })

    router.post(path + v + addLaService + 'what-language', function (req, res) {
        req.session.data.languageString = req.session.data.chooseLanguage.toString();
        req.session.data.languageString = req.session.data.languageString.replace(/,/g, ', ');
        if (req.session.data.changeLanguage === true) {
            req.session.data.changeLanguage = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'pay-for-service')
        }
    })

    router.get(path + v + addLaService + 'change-pay-for-service', function (req, res) {
        req.session.data.changePayForService = true
        res.redirect(path + v + addLaService + 'pay-for-service')
    })

    router.post(path + v + addLaService + 'pay-for-service', function (req, res) {
        if (req.session.data.changePayForService === true) {
            req.session.data.changePayForService = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'contact-details')
        }
    })

    router.get(path + v + addLaService + 'change-contact-details', function (req, res) {
        req.session.data.changeContactDetails = true
        res.redirect(path + v + addLaService + 'contact-details')
    })

    router.post(path + v + addLaService + 'contact-details', function (req, res) {
        if (req.session.data.changeContactDetails === true) {
            req.session.data.changeContactDetails = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'service-description')
        }
    })

    router.get(path + v + addLaService + 'change-service-description', function (req, res) {
        req.session.data.changeDescription = true
        res.redirect(path + v + addLaService + 'service-description')
    })

    router.post(path + v + addLaService + 'service-description', function (req, res) {
        if (req.session.data.changeDescription === true) {
            req.session.data.changeDescription = false
            res.redirect(path + v + addLaService + 'check-service-details')
        }
        else {
            res.redirect(path + v + addLaService + 'check-service-details')
        }
    })

    router.post(path + v + addLaService + 'check-service-details', function (req, res) {
        res.redirect(path + v + addLaService + 'confirmation')
    })

    router.post(path + v + addLaService + 'confirmation', function (req, res) {
        req.session.data = []
        res.redirect(path + v + 'homepage')
    })

    // Pages for manage LA services

    router.post(path + v + manageLaService + 'remove-service', function (req, res) {
        if (req.session.data.remove === 'yes') {
            res.redirect(path + v + manageLaService + 'remove-confirmation')
        }
        if (req.session.data.remove === 'no') {
            res.redirect(path + v + manageLaService + 'not-removed')
        }
    })

    router.post(path + v + manageLaService + 'remove-confirmation', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + manageLaService + 'view-edit', function (req, res) {
        res.redirect(path + v + manageLaService + 'edit-saved')
    })

    router.post(path + v + manageLaService + 'edit-saved', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    // Pages for add hub

    router.post(path + v + addHub + 'what-local-authority', function (req, res) {
        res.redirect(path + v + addHub + 'service-name')
    })

    router.post(path + v + addHub + 'service-name', function (req, res) {
        res.redirect(path + v + addHub + 'in-person-where')
    })

    router.post(path + v + addHub + 'in-person-where', function (req, res) {
        res.redirect(path + v + addHub + 'days-service-is-open')
    })

    router.post(path + v + addHub + 'days-service-is-open', function (req, res) {
        req.session.data.daysString = req.session.data.opening.toString();
        req.session.data.daysString = req.session.data.daysString.replace(/,/g, ', ');
        if (req.session.data.daysString.includes(',')) {
            res.redirect(path + v + addHub + 'same-hours-daily')
        }
        else {
            res.redirect(path + v + addHub + 'hours-for-each-day')
        }
    })

    router.post(path + v + addHub + 'same-hours-daily', function (req, res) {
        if (req.session.data['same-hours'] === 'Yes') {
            res.redirect(path + v + addHub + 'hours-for-each-day')
        }
        if (req.session.data['same-hours'] === 'No') {
            res.redirect(path + v + addHub + 'hours-for-each-day')
        }
    })

    router.post(path + v + addHub + 'hours-for-each-day', function (req, res) {
        res.redirect(path + v + addHub + 'contact-details')
    })


    router.post(path + v + addHub + 'contact-details', function (req, res) {
        res.redirect(path + v + addHub + 'service-description')
    })

    router.post(path + v + addHub + 'service-description', function (req, res) {
        res.redirect(path + v + addHub + 'check-service-details')
    })

    router.post(path + v + addHub + 'check-service-details', function (req, res) {
        res.redirect(path + v + addHub + 'confirmation')
    })

    router.post(path + v + addHub + 'confirmation', function (req, res) {
        req.session.data = []
        res.redirect(path + v + 'homepage')
    })

    // Pages for manage hubs

    router.post(path + v + manageHub + 'remove-service', function (req, res) {
        if (req.session.data.remove === 'yes') {
            res.redirect(path + v + manageHub + 'remove-confirmation')
        }
        if (req.session.data.remove === 'no') {
            res.redirect(path + v + manageHub + 'not-removed')
        }
    })

    router.post(path + v + manageHub + 'remove-confirmation', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + manageHub + 'view-edit', function (req, res) {
        res.redirect(path + v + manageHub + 'edit-saved')
    })

    router.post(path + v + manageHub + 'edit-saved', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    // Pages for enable LA


    router.post(path + v + enableLa + 'what-local-authority', function (req, res) {
        res.redirect(path + v + enableLa + 'check-details')
    })

    router.post(path + v + enableLa + 'check-details', function (req, res) {
        res.redirect(path + v + enableLa + 'confirmation')
    })


}