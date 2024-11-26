function max(matrix) 
{
    let maxElement = -Infinity;
    for (const row of matrix) 
    {
        for (const num of row) 
        {
            if (num > maxElement) 
            {
                maxElement = num;
            }
        }
    }
    return maxElement;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
