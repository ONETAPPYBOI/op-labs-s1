'use strict';

function range(start, end) 
{
    const result = [];
    for (let i = start; i <= end; i++) 
    {
        result.push(i);
    }
    return result;
}

const numbers = range(15, 30);
console.log(numbers);

module.exports = { range };