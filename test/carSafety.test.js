const { assert } = require("chai");
const carSafety = require("../pages/carSafety.page")

describe ("Car safety test", function(){
    it ("Verify page title",async function(){
        browser.url('/intl/v/car-safety/a-million-more')
        browser.maximizeWindow()
        await carSafety.AcceptCookies()
        assert.equal("A million more | Volvo Cars - International",await browser.getTitle(), "Browser title doesn't match") 
    })

    it ("Verify presence of Menu link on the home page",async function(){
        assert.equal(true,await carSafety.ismenuExist(), "Menu link does not exist on the homepage")
    })

    it ("Verify presence of various items under Menu",async function(){
        await carSafety.clickMenu()
        assert.equal(true,await carSafety.isbuyOptionExist(), "Buy item does not exist under Menu")
        assert.equal(true,await carSafety.isownOptionExist(), "Own item does not exist under Menu")
        assert.equal(true,await carSafety.isaboutVolvoOptionExist(), "About Volvo item does not exist under Menu")    
        assert.equal(true,await carSafety.isexploreOptionExist(), "Explore item does not exist under Menu")
        assert.equal(true,await carSafety.ismoreOptionExist(), "More item does not exist under Menu")
        assert.equal(true,await carSafety.isinternationalOptionExist(), "International item does not exist under Menu")
    })

    it ("Verify presence of heading 'Explore our models'",async function(){
        assert.equal(true,await carSafety.isexploreOurModelsHeadingExist(), "'Explore our models' heading does not exists")
    })

})
