const assert = require('assert');
const Menu = require('../javascript/app')

describe("Greet", () =>{
    it('returns "Welcome to Lights Out"', ()=>{
        const expected="Welcome to Lights Out";
        const menu = new Menu();
        const result = menu.greet()
        assert.strictEqual(expected, result);
    })
})