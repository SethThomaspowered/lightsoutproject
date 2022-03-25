const assert = require('assert');

describe("Greet", () =>{
    it('returns "Welcome to Lights Out"', ()=>{
        const expected="Welcome to Lights Out";
        const result = Greet()
        assert.strictEqual(expected, result);
    })
})