function removeElements(array, ...items) 
{
    const itemsToRemove = new Set(items);
  
    for (let i = array.length - 1; i >= 0; i--) 
    {
        if (itemsToRemove.has(array[i])) 
        {
            array.splice(i, 1);
        }
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);
// Result: [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);
// Result: ['Beijing', 'Saratov']
