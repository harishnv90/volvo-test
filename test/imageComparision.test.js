const { assert } = require("chai");
const carSafety = require("./carSafety.page")

describe('Volvo cars image comparision', () => {

    it('should save some screenshots', async () => {
        browser.url('/intl/v/car-safety/a-million-more');
        browser.maximizeWindow()
        await carSafety.AcceptCookies()
        // Save a screen
        await browser.saveScreen('examplePaged', { /* some options */ });
    });

    it('should compare successful with a baseline', async () => {
        browser.url('/intl/v/car-safety/a-million-more');
        browser.maximizeWindow()
        await carSafety.AcceptCookies()
        // Check a screen
        expect(await browser.checkScreen('examplePaged', { /* some options */ })).to.eql(0);
    });
 });
