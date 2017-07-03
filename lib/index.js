'use strict';

const vparse = require('vparse');

const minVersion = '6.3.0';

class GlobalConnection {
    constructor(db, options) {
        if (!db || !db.constructor || db.constructor.name !== 'Database') {
            throw new TypeError('Parameter \'db\' is invalid.');
        }
        if (!db.$config.version || vparse(db.$config.version).compare(minVersion) < 0) {
            throw new TypeError('Minimum pg-promise supported is ' + minVersion);
        }

        this.opt = options;
    }

}

module.exports = GlobalConnection;
