const { Builder, By } = require("selenium-webdriver");

(async function selectCheckboxes() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 5: Checkboxen auswählen");

        // Alle Checkboxen finden
        const checkboxes = await driver.findElements(By.xpath("//input[@type='checkbox']")); // Ergänzter XPath
        
        // Jede Checkbox prüfen und ggf. anklicken
        for (const checkbox of checkboxes) {
            if (!(await checkbox.isSelected())) { // Prüfen, ob Checkbox nicht ausgewählt ist
                await checkbox.click(); // Checkbox auswählen
            }
        }

        console.log("Alle Checkboxen ausgewählt.");
    } finally {
        await driver.quit();
    }
})();
