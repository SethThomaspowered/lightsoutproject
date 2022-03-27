const assert = require('assert');
const Menu = require('../javascript/app')

describe("Menu", ()=>{
    describe(".greet", () =>{
        it('returns "Welcome to Lights Out"', ()=>{
            const expected="Welcome to Lights Out";
            const menu = new Menu();
            const result = menu.greet()
            assert.strictEqual(expected, result);
        })
    })
})

describe('init', ()=>{
    it('returns a welcome message', ()=>{
        const expected= "Welcome to Lights Out";
        assert.ok()
    }) 
})