var v = 'v1/'
var path = '/edit-remove-service/'
var pathGet = 'edit-remove-service/'
var editRemoveService = 'edit-remove-service/'

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
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + 'start', function (req, res) {
        res.redirect(path + v + 'sign-in')
    })

    router.post(path + v + 'sign-in', function (req, res) {
        res.redirect(path + v + 'homepage')
    })

    router.post(path + v + 'remove-service', function (req, res) {
        if (req.session.data.remove === 'yes') {
            res.redirect(path + v + 'view-services-1')
        }
        if (req.session.data.remove === 'no') {
            res.redirect(path + v + 'view-services')
        }
    })


}