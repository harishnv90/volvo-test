const { assert } = require("chai");
const carSafety = require("../pages/carSafety.page")

describe ("car-safety/a-million-more test", function(){
    it ("Verify page title",async function(){
        browser.url('/intl/v/car-safety/a-million-more')
        console.log("**************************"+browser.getTitle())
        browser.maximizeWindow()
        console.log("**************************"+browser.getTitle())
        await carSafety.AcceptCookies()
        console.log("**************************"+browser.getTitle())
        assert.equal("A million more | Volvo Cars - International", browser.getTitle(), "Browser title not matching") 
        console.log("**************************"+browser.getTitle())
    })

//     it ("Verify presence of Menu link on the home page",async function(){
//         assert.equal(true,await carSafety.ismenuExist(), "Menu link does not exist on the homepage")
//     })

//     it ("Verify presence of various items under Menu",async function(){
//         await carSafety.clickMenu()
//         assert.equal(true,await carSafety.isbuyOptionExist(), "Buy item does not exist under Menu")
//         assert.equal(true,await carSafety.isownOptionExist(), "Own item does not exist under Menu")
//         assert.equal(true,await carSafety.isaboutVolvoOptionExist(), "About Volvo item does not exist under Menu")    
//         assert.equal(true,await carSafety.isexploreOptionExist(), "Explore item does not exist under Menu")
//         assert.equal(true,await carSafety.ismoreOptionExist(), "More item does not exist under Menu")
//         assert.equal(true,await carSafety.isinternationalOptionExist(), "International item does not exist under Menu")
//     })

    // it ("Verify presence of cars span", function(){
    //     assert.equal(true,carSafety.isCarsSpanExist(), "Car span not exist")         
    // })

    // it ("Verify presence of various types of cars", function(){
    //     carSafety.clickCars()
    //     assert.equal(true,carSafety.iselectricHeadingExist(), "Electric car type not displayed")
    //     assert.equal(true,carSafety.ishybridsHeadingExist(), "Hybrid car type not displayed")
    //     assert.equal(true,carSafety.ismildHybridsHeadingExist(), "Mild hybrid car type not displayed")         
    // })

    // it ("Verify description of each type of car", function(){
    //     assert.equal(true,carSafety.ispureElectricDescriptionExist(), "Pure electric description not displayed")
    //     assert.equal(true,carSafety.isplugInHybridsDescriptionExist(), "Plug in hybrids description not displayed")
    //     assert.equal(true,carSafety.ismildHybridsMicroHybridsDescriptionExist(), "Mild hybrid micro hybrid description not displayed")
    //     carSafety.clickClose()       
    // })

    // it ("Verify site navigation click and presence of options under it", function(){
    //     carSafety.clicksiteNavigationIcon()
    //     assert.equal(true,carSafety.isbuyOptionExist(), "Buy option does not exist")
    //     assert.equal(true,carSafety.isownOptionExist(), "Own option does not exist")
    //     assert.equal(true,carSafety.iswhyVolvoOptionExist(), "Why Volvo option does not exist")
    //     assert.equal(true,carSafety.isexploreOptionExist(), "Explore option does not exist")
    //     assert.equal(true,carSafety.ismoreOptionExist(), "More option does not exist")
    //     assert.equal(true,carSafety.isinternationalOptionExist(), "International option does not exist")          
    // })

    

})
