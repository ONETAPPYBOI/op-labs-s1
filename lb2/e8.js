'use strict';

function createUser(name, city) 
{
    return { name, city };
}

const user = createUser('Marcus Aurelius', 'Roma');
console.log(user);

module.exports = { createUser };