module.exports = {
    waitAndClickXPath: async function(selector) {
        try {
            await page.waitForXPath(selector);
            const elements = await page.$x(selector);
            await elements[0].click();
        } catch (error) {
            throw new Error(`Could not click on the selector: ${selector}`);
        }
    }
}