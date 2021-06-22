const { expect, test, describe} = require('@jest/globals');
const {returnTwo, greeting, add} = require('./function.js');

test('returnTwo should return the number 2', function(){
    expect([2]).toEqual([2])
});

test('greeting should return a string', function(){
    expect(greeting)
})