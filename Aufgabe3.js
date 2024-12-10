const { Builder, By } = require("selenium-webdriver");

(async function selectTextField() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 3: Textfeld auswählen");

        // Textfeld finden
        const textField = await driver.findElement(By.xpath("//input[@id='myTextInput']")); // Ergänzter XPath
        
        // Text eingeben
        await textField.sendKeys("Automatisierter Test");
        console.log("Textfeld mit Text gefüllt.");
    } finally {
        await driver.quit();
    }
})();
