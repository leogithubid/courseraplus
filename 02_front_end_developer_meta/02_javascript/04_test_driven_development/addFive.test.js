

const addFive = require('./addFive');//gets the addFive.js file
test('returns the number plus 5',()=>{
    expect(addFive(1)).toBe(6);
})