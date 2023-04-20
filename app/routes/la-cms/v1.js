var v = 'v1/'
var path = '/la-cms/'
var pathGet = 'la-cms/'
var addService = 'add-service/'
var addOrg = 'add-org/'

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

    // add org

    router.post(path + v + addOrg + 'org-name', function (req, res) {
        res.redirect(path + v + addOrg + 'org-address')
    })

    router.post(path + v + addOrg + 'org-address', function (req, res) {
        res.redirect(path + v + addOrg + 'contact-number')
    })

    router.post(path + v + addOrg + 'contact-number', function (req, res) {
        res.redirect(path + v + addOrg + 'email-address')
    })

    router.post(path + v + addOrg + 'email-address', function (req, res) {
        res.redirect(path + v + addOrg + 'check-details')
    })

    router.post(path + v + addOrg + 'check-details', function (req, res) {
        res.redirect(path + v + addOrg + 'confirmation')
    })
}