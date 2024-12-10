const { Builder, By } = require("selenium-webdriver");

(async function controlSlider() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 6: Slider steuern");

        // Slider finden
        const slider = await driver.findElement(By.xpath("//input[@type='range']")); // Ergänzter XPath
        
        // Slider-Wert auf 75 setzen
        await driver.executeScript("arguments[0].value = 75;", slider);
        console.log("Slider auf Wert 75 gesetzt.");
    } finally {
        await driver.quit();
    }
})();
