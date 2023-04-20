var v = 'v4/'
var path = '/vcs-request-of-support/'
var pathGet = 'vcs-request-of-support/'
var addService = 'add-service/'
var addOrg = 'add-org/'
var addLa = 'add-la/'
var addVcs = 'add-vcs/'
var addBoth = 'add-la-org/'
var addUser = 'add-user/'
var manageUser = 'manage-users/'
var manageRequests = 'manage-requests/'
var manageRequestsTwo = 'manage-requests-2/'
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

    // Accept or Decline request

    router.get(path + v + 'index', function (req, res) {
        if (!req.session.data) {
            // req.session.data = []
        }
        
        res.redirect(path + v + 'start')
    })

   //Sign into dashboard
   router.post(path + v + 'sign-in', function (req, res) {
    res.redirect(path + v + 'dashboard')
    })

    // Fogotten password
    router.post(path + v + 'forgotten-password', function (req, res) {
        res.redirect(path + v + 'email-sent')
    })


    // Confirmation or decline page John Smith
    router.post(path + v + manageRequests + "john-smith", function (req, res) {
        if ( req.session.data.supportStatus === 'Accepted') {
            res.redirect(path + v + manageRequests + 'confirmation')
        } else {
            res.redirect(path + v + manageRequests + 'request-declined')
        } 
    })
   


    // Confirmation or decline page James Garner
    router.post(path + v + manageRequestsTwo + "james-garner", function (req, res) {
        if ( req.session.data.supportStatusTwo === 'Accepted') {
            res.redirect(path + v + manageRequestsTwo + 'confirmation')
        } else {
            res.redirect(path + v + manageRequestsTwo + 'request-declined')
        }
    })
    

}