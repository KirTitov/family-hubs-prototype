var v = 'v1/'
var path = '/find-support/'
var pathGet = 'find-support/'
var bouncers = 'bouncers/'

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
        res.redirect(path + v + 'search')
    })

    router.post(path + v + 'search', function (req, res) {
        res.redirect(path + v + 'type-of-service')
    })

    router.post(path + v + 'search2', function (req, res) {
        res.redirect(path + v + 'results')
    })

    router.post(path + v + 'type-of-service', function (req, res) {
        res.redirect(path + v + 'results')
    })

    router.post(path + v + 'type-of-service', function (req, res) {
        res.redirect(path + v + 'results')
    })

    router.post(path + v + bouncers + 'details', function (req, res) {
        res.redirect(path + v + bouncers + 'start')
    })

    router.post(path + v + bouncers + 'start', function (req, res) {
        res.redirect(path + v + bouncers + 'safeguarding')
    })

    router.post(path + v + bouncers + 'safeguarding', function (req, res) {
        res.redirect(path + v + bouncers + 'consent')
    })

    router.post(path + v + bouncers + 'consent', function (req, res) {
        res.redirect(path + v + bouncers + 'support-details')
    })

    router.post(path + v + bouncers + 'support-details', function (req, res) {
        res.redirect(path + v + bouncers + 'contact-details')
    })

    router.post(path + v + bouncers + 'contact-details', function (req, res) {
        res.redirect(path + v + bouncers + 'why-support')
    })

    router.post(path + v + bouncers + 'why-support', function (req, res) {
        res.redirect(path + v + bouncers + 'confirmation')
    })

}