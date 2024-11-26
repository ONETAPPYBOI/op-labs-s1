function removeElement(array, item) 
{
    const index = array.indexOf(item);
    if (index !== -1) 
    {
      array.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Result: [1, 2, 3, 4, 6, 7]

const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(cities, 'Lima'); // remove 'Lima' from array
removeElement(cities, 'Berlin'); // do nothing
console.log(cities);
// Result: ['Kiev', 'Beijing', 'Saratov']