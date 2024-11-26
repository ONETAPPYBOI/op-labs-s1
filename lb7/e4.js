function difference(array1, array2) 
{
    const set2 = new Set(array2);
    return array1.filter(item => !set2.has(item));
}
  

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Result: [7, -2, 5]
  
const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array3, array4);
console.log(result2);
// Result: ['Beijing']