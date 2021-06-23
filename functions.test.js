const { expect, test, describe} = require('@jest/globals');
const {returnTwo, greeting, add} = require('./function.js');

test('returnTwo should return the number 2', function(){
    expect(returnTwo(2)).toEqual(2)
});

describe ('this function should return a string with a name', function(){
        test('name mike, should return Hello, mike', function(){
        expect(greeting('mike')).toEqual('Hello, mike')
    })
        test('name sam, should return Hello, sam', function(){
        expect(greeting('sam')).toEqual('Hello, sam')
        })
})


describe('this function should return the sum of two numbers', function(){
    test('1 and 2', function(){
        expect(add(1, 2)).toEqual(3)
    });
    
    test('5 and 9', function(){
        expect(add(5, 9)).toEqual(14)
    })
})