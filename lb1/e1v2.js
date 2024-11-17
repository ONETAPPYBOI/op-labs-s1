function inc(num) 
{
    num.n += 1;
}

// example call
const obj = { n: 5 };
inc(obj);
console.dir(obj); // { n: 6 }
