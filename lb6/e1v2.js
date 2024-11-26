const compose = (...funcs) => 
{
    if (funcs.some(fn => typeof fn !== 'function')) 
    {
        throw new Error('All arguments to compose must be functions');
    }

    const errorHandlers = [];

    const composedFunction = function(...args) {
    let result;
        try 
        {
            let index = funcs.length - 1;
            result = funcs[index](...args);
            for (index = funcs.length - 2; index >= 0; index--) 
            {
                result = funcs[index](result);
            }
            return result;
        } 
        catch (e)
        {
            errorHandlers.forEach(handler => handler(e));
            return undefined;
        }
    };

    composedFunction.on = function(event, handler) 
    {
        if (event === 'error' && typeof handler === 'function') 
        {
            errorHandlers.push(handler);
        }
    };

    return composedFunction;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const risky = x => 
{
    if (x < 0) throw new Error('Negative input not allowed');
    return x;
};

const f = compose(inc, twice, cube);

console.log(f(2));

const g = compose(risky, inc, cube);
g.on('error', e => 
{
    console.error('Caught error:', e.message);
});
  
console.log(g(-2)); 