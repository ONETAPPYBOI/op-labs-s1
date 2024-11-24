'use strict';

function average(a, b) 
{
    return (a + b) / 2;
}

function square(x) 
{
    return x * x;
}

function cube(x) 
{
    return x * x * x;
}


function calculate() 
{
    const results = [];
    for (let i = 0; i <= 9; i++) 
    {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb); 
        results.push(avg);
    }
    return results;
}

const output = calculate();
console.log(output);

module.exports = { square, cube, average, calculate };