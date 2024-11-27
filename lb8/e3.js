function contract(fn, ...types) 
{
    const returnType = types[types.length - 1];
    const argTypes = types.slice(0, -1);
  
    function isType(value, type) 
    {
        if (type === Number) 
        {
            return typeof value === 'number';
        } 
        else if (type === String) 
        {
            return typeof value === 'string';
        } 
        else if (type === Boolean) 
        {
            return typeof value === 'boolean';
        } 
        else if (type === Function) 
        {
            return typeof value === 'function';
        } 
        else if (type === Object) 
        {
            return typeof value === 'object' && value !== null;
        } 
        else 
        {
            return value instanceof type;
        }
    }
  
    return function(...args) 
    {
        if (args.length !== argTypes.length) 
        {
            throw new TypeError(
            `Expected ${argTypes.length} arguments, but got ${args.length}`
            );
        }

        for (let i = 0; i < argTypes.length; i++) 
        {
            if (!isType(args[i], argTypes[i])) 
            {
                throw new TypeError(
                `Argument ${i + 1} should be of type ${argTypes[i].name}`
                );
            }
        }

        const result = fn.apply(this, args);

        if (!isType(result, returnType)) 
        {
            throw new TypeError(
            `Return value should be of type ${returnType.name}`
            );
        }

        return result;
    };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
let res = addNumbers(2, 3);
console.dir(res); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!