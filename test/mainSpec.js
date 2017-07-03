'use strict';

const GlobalConnection = require('../lib');

describe('Main', () => {
    it('must instantiate', () => {
        const a = new GlobalConnection();
        expect(a).toBeTruthy();
    });

});
