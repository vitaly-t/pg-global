'use strict';

const GlobalConnection = require('../lib');

class Database {
    constructor() {
        this.$config = {
            version: '1.2.3'
        };
    }
}

describe('Construction', () => {
    it('must throw on invalid driver', () => {
        expect(() => {
            new GlobalConnection();
        }).toThrow(new TypeError('Parameter \'db\' is invalid.'));
    });
    it('must throw on invalid driver version', () => {
        expect(() => {
            new GlobalConnection(new Database());
        }).toThrow(new TypeError('Minimum pg-promise supported is 6.3.0'));
    });
});
