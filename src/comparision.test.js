const comparisionOperation = require('./comparision');

describe("Comparision tests", () => {
    test('3=3 should return true', () => {
        // arrange and act
        var result = comparisionOperation.equal(3, 3)

        // assert
        expect(result).toBe(true);
    });
})