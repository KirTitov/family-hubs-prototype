var v = 'v1/'
var path = '/add-service/'
var pathGet = 'add-service/'

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
        res.redirect(path + v + 'welcome')
    })

    router.post(path + v + 'welcome', function (req, res) {
        res.redirect(path + v + 'service-name')
    })

    router.post(path + v + 'service-name', function (req, res) {
        res.redirect(path + v + 'service-address')
    })

    router.post(path + v + 'service-address', function (req, res) {
        res.redirect(path + v + 'type-of-service')
    })

    router.post(path + v + 'type-of-service', function (req, res) {
        res.redirect(path + v + 'age-groups')
    })

    router.post(path + v + 'age-groups', function (req, res) {
        res.redirect(path + v + 'delivery-type')
    })

    router.post(path + v + 'delivery-type', function (req, res) {
        res.redirect(path + v + 'language')
    })

    router.post(path + v + 'language', function (req, res) {
        res.redirect(path + v + 'pay-for-service')
    })

    router.post(path + v + 'pay-for-service', function (req, res) {
        res.redirect(path + v + 'contact-details')
    })

    router.post(path + v + 'contact-details', function (req, res) {
        res.redirect(path + v + 'check-service-details')
    })

}