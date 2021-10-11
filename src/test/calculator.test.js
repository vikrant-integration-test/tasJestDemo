const mathOperations = require("../main/calculator");

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('adding -1 + 2 should return 1', () => {
        expect(mathOperations.sum(-1, 2)).toBe(1);
    });
})
