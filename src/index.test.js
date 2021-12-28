const mathOperations = require('./index');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum(1, 2)

        // assert
        expect(result).toBe(3);
    });
    
    test('difference 3 - 2 should return 1', () => {
        // arrange and act
        var result = mathOperations.diff(3, 2)

        // assert
        expect(result).toBe(1);
    });
})
