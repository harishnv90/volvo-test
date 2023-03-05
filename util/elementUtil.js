class ElementUtil{

    async doClick(element){
        await element.waitForDisplayed()
        await element.click()
    }

    async doSetValue(element, value){
        await element.waitForDisplayed()
        await element.setValue(value)
    }

    async doGetText(element){
        await element.waitForDisplayed()
        return element.getText()
    }

    async doIsDisplayed(element){
        await element.waitForDisplayed()
        return element.isDisplayed()
    }

    async doIsSelected(element){
        await element.waitForDisplayed()
        return element.isSelected()
    }

    async doIsEnabled(element){
        await element.waitForDisplayed()
        return element.isEnabled()
    }

    async doIsClickable(element){
        await element.waitForDisplayed()
        return element.isClickable()
    }

    async doIsExisting(element){
        return element.isExisting()
    }

    async doGetPageTitle(){
        return browser.getTitle()
    }

    async doGetAttribute(element, attributename){
        return element.getAttribute(attributename)
    }

    async doGetText(element){
        return element.getText()
    }

    async doGetElementCount(element){
        return element.length
    }

    async doClearTextField(element){
        await element.clearValue()
    }
}

module.exports = new ElementUtil()
