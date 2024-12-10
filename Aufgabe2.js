const { Builder, By } = require("selenium-webdriver");

(async function selectDropdownOption() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 2: Dropdown-Menü");

        // Dropdown-Button finden und die Maus darüber bewegen
        const dropdownButton = await driver.findElement(By.xpath("//div[@id='myDropdown']")); // Ergänzter XPath
        const actions = driver.actions({ async: true });
        await actions.move({ origin: dropdownButton }).perform();

        // Dropdown-Option auswählen
        const dropdownOption = await driver.findElement(By.xpath("//a[text()='Link One']")); // Ergänzter XPath
        await dropdownOption.click();

        console.log("Dropdown-Option 'Link One' ausgewählt.");
    } finally {
        await driver.quit();
    }
})();
