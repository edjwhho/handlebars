const assert = require('assert');
const { getIVABanner } = require('../src/ads');describe('Ads for taxes', () => {
    it('Get green banner for 15% IVA', () => {
        const actual = getIVABanner(15);
        const expect = {
            img: '/bar.jpg',
            size: '15%',
            border: 3,
            color: 'green'
        }
        assert.deepEqual(actual, expect)
    }) it('Get green banner for 20% IVA', () => {
        const actual = getIVABanner(20);
        const expect = {
            img: '/bar.jpg',
            size: '20%',
            border: 5,
            color: 'yellow'
        }
        assert.deepEqual(actual, expect)
    })
    it('Get green banner for 30% IVA', () => {
        const actual = getIVABanner(30);
        const expect = {
            img: '/bar.jpg',
            size: '30%',
            border: 5,
            color: 'red'
        }
        assert.deepEqual(actual, expect)
    })
    it('Get default ', () => {
        const actual = getIVABanner();
        const expect = {
            img: '/bar.jpg',
            size: '100%',
            border: 5,
            color: 'red'
        }
        assert.deepEqual(actual, expect)
    })
})
DEV Community – A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2021.