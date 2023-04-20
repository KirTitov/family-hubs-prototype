const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

// Routes files for professionals finding and requesting support service
require('./routes/find-support/v1.js')(router);
require('./routes/find-support/v2.js')(router);
require('./routes/find-support/v3.js')(router);
require('./routes/find-support/v4.js')(router);
require('./routes/find-support/v5.js')(router);
require('./routes/find-support/v6.js')(router);

// Routes files for voluntary and community sector organisations to add services
require('./routes/add-service/v1.js')(router);
require('./routes/add-service/v2.js')(router);
require('./routes/add-service/v3.js')(router);
require('./routes/add-service/v4.js')(router);
require('./routes/add-service/v5.js')(router);
require('./routes/add-service/v6.js')(router);
require('./routes/add-service/v7.js')(router);

// UNIVERSAL admin portal
// require('./routes/admin-portal/v1.js')(router);

// Admin routes DfE
require('./routes/admin-dfe/v1.js')(router);
require('./routes/admin-dfe/v2.js')(router);

// Admin routes LA
require('./routes/admin-la/v1.js')(router);
require('./routes/admin-la/v2.js')(router);

// Admin routes VCS
require('./routes/admin-vcs/v1.js')(router);
require('./routes/admin-vcs/v2.js')(router);

// Routes files for voluntary and community sector organisations to edit and remove services
require('./routes/edit-remove-service/v1.js')(router);

// VCS request for support v1
require('./routes/vcs-request-of-support/v1.js')(router);

// VCS request for support v2
require('./routes/vcs-request-of-support/v2.js')(router);

// VCS request for support v3
require('./routes/vcs-request-of-support/v3.js')(router);

// VCS request for support v4
require('./routes/vcs-request-of-support/v4.js')(router);

// VCS request for support v5
require('./routes/vcs-request-of-support/v5.js')(router);

module.exports = router
