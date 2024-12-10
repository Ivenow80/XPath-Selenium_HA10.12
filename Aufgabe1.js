//Aufgabe1
const { Builder, By } = require("selenium-webdriver");

(async function findHeader() {
    let driver = await new Builder().forBrowser("chrome").build(); // Chrome-Browser starten
    try {
        await driver.get("https://seleniumbase.io/demo_page"); // Webseite öffnen
        console.log("Aufgabe 1: Hauptüberschrift finden");

        // Hauptüberschrift mit XPath finden
        const header = await driver.findElement(By.xpath("//h1[text()='Demo Page']"));
        
        // Text der Überschrift ausgeben
        console.log("Gefundene Überschrift:", await header.getText());
    } finally {
        await driver.quit(); // Browser schließen
    }
})();
