function seq(...args) 
{
    const functions = [...args];

    const chain = (...newArgs) => 
    {
        if (typeof newArgs[0] === 'number') 
        {
            return functions.reduceRight((result, fn) => fn(result), newArgs[0]);
        }
        functions.push(...newArgs);
        return chain;
    };

    return chain;
}

console.log(seq(x => x + 7)(x => x * 2)(5)); // 17
console.log(seq(x => x * 2)(x => x + 7)(5)); // 24
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); // 3
