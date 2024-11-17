// array with different types of data
const array = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'code', 0, null, undefined, { key: 'value' }, [1, 2, 3], true, 'JavaScript', NaN]

// tracks the items in the array, except it's empty by default
const typeCount = {}

// the actual code 
for (const item of array) 
    {
    const type = typeof item
    if (typeCount.hasOwnProperty(type)) 
    {
        typeCount[type]++
    } 
    else 
    {
        typeCount[type] = 1
    }
}

// output
console.dir(typeCount);