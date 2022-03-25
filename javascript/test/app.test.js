import { strictEqual } from 'assert';

describe("Greet", () =>{
    it('returns "Welcome to Lights Out"', ()=>{
        const expected="Welcome to Lights Out";
        const result = Greet()
        strictEqual(expected, result);
    })
})