const elementutil = require("../util/elementUtil");

class CarSafety{

    //element locators
    get cookies() {return $('//button[text()="Accept"]')}
    get menu() {return $('//em[text()="Menu"]')}
    get cars() {return $('//em[text()="Our Cars"]')}
    get electric() {return $('//h2[text()="Electric"]')}
    get hybrids() {return $('//h2[text()="Hybrids"]')}
    get mildHybrids() {return $('//h2[text()="Mild hybrids"]')}
    get pureElectric() {return $('//p[text()="Pure electric"]')}
    get plugInHybrids() {return $('//p[text()="Plug-in hybrids"]')}
    get mildHybridsMicroHybrids() {return $('//p[text()="Mild hybrids | Micro hybrids"]')}
    get close() {return $('//span[text()="Close"]')}
    get siteNavigationIcon() {return $('(//div[@class="_SiteNav-a"])[10]')}
    get buy() {return $('//em[text()="Buy"]')}
    get own() {return $('//em[text()="Own"]')}
    get aboutVolvo() {return $('//em[text()="About Volvo"]')}
    get explore() {return $('//em[text()="Explore"]')}
    get more() {return $('//em[text()="More"]')}
    get international() {return $('//p[text()="International"]')}

    //actions
    async ismenuExist() {return elementutil.doIsDisplayed(this.menu)}
    async isCarsSpanExist() {return elementutil.doIsDisplayed(this.cars)}
    async iselectricHeadingExist() {return elementutil.doIsDisplayed(this.electric)}
    async ishybridsHeadingExist() {return elementutil.doIsDisplayed(this.hybrids)}
    async ismildHybridsHeadingExist() {return elementutil.doIsDisplayed(this.mildHybrids)}
    async ispureElectricDescriptionExist() {return elementutil.doIsDisplayed(this.pureElectric)}
    async isplugInHybridsDescriptionExist() {return elementutil.doIsDisplayed(this.plugInHybrids)}
    async ismildHybridsMicroHybridsDescriptionExist() {return elementutil.doIsDisplayed(this.mildHybridsMicroHybrids)}
    async iscloseExist() {return elementutil.doIsDisplayed(this.close)}
    async issiteNavigationIconExist() {return elementutil.doIsDisplayed(this.siteNavigationIcon)}
    async isbuyOptionExist() {return elementutil.doIsDisplayed(this.buy)}
    async isownOptionExist() {return elementutil.doIsDisplayed(this.own)}
    async isaboutVolvoOptionExist() {return elementutil.doIsDisplayed(this.aboutVolvo)}
    async isexploreOptionExist() {return elementutil.doIsDisplayed(this.explore)}
    async ismoreOptionExist() {return elementutil.doIsDisplayed(this.more)}
    async isinternationalOptionExist() {return elementutil.doIsDisplayed(this.international)}

    async AcceptCookies(){
        await elementutil.doClick(this.cookies)
    }

    async clickMenu(){
        await elementutil.doClick(this.menu)
    }

    async clickBuy(){
        await elementutil.doClick(this.buy)
    }

    async clickCars(){
        await elementutil.doClick(this.cars)
    }

    async clickClose(){
        await elementutil.doClick(this.close)
    }

    async clicksiteNavigationIcon(){
        await elementutil.doClick(this.siteNavigationIcon)
    }

}
module.exports = new CarSafety();
