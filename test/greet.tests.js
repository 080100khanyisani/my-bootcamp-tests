// import greet from "../greet"

describe('greet test' , function(){
    it('greet should return a greeting' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');

    });

});