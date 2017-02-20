'use strict';

const assert = require('assert');

const DumpertAPI = require('../src');

describe('Module', () => {
    it('can be required', () => {
        assert(DumpertAPI);
    });

    it('is an object', () => {
        assert.equal(typeof DumpertAPI, 'object');
    });
});

describe('Dumpert API', () => {
    it('can get daily top videos', () => {
        return DumpertAPI.getDailyTopVideos('2017-01-01').then(response => {
            assert.equal(typeof response, 'object');
            assert.equal(response.items.length, 25);
            assert.equal(typeof response.items[24], 'object');
        });
    });

    it('can get the latest videos', () => {
        return Promise.all([DumpertAPI.getLatest(), DumpertAPI.getLatest('100')]).then((responses) => {
            responses.forEach((response) => {
                assert(typeof response, 'object');
                assert.equal(response.items.length, 15);
                assert.equal(typeof response.items[14], 'object');
            });
        });
    });
});

describe('Dumpert Comments API', () => {
    it('can get comments', () => {
        return DumpertAPI.getComments('6350_7e370664').then((response) => {
            assert.equal(typeof response, 'object');
            assert.equal(typeof response.data, 'object');
            assert(response.data.comments.length);
        });
    });
})