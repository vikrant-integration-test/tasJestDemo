const getAboutUsLink = require("../main/index");

//For code coverage ;jest --coverage //CTRL+SHIFT+P if running test using jest extension

test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Returns acerca-de for spanish language", () => {
    expect(getAboutUsLink("es-es")).toBe("/acerca-de");
});

test.skip("Returns acerca-de for spanish language", () => {
    expect(getAboutUsLink("cs-CZ")).toBe("/o-nas");
});

test("Returns acerca-de for spanish language", () => {
    expect(getAboutUsLink("cs-CZ")).toBe("/o-nas");
});