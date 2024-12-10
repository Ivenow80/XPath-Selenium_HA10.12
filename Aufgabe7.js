const { Builder, By } = require("selenium-webdriver");

(async function findProgressBarLabel() {
    let driver = await new Builder().forBrowser("chrome").build(); // Chrome-Browser starten
    try {
        await driver.get("https://seleniumbase.io/demo_page"); // Webseite öffnen
        console.log("Aufgabe 7: Progress Bar");

        // Label für die Fortschrittsanzeige finden
        const progressBarLabel = await driver.findElement(By.xpath("//label[@id='progressLabel']")); // Korrigierter XPath
        console.log("Label gefunden:", await progressBarLabel.getText()); // Text des Labels ausgeben
    } finally {
        await driver.quit(); // Browser schließen
    }
})();
