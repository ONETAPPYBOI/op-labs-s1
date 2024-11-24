'use strict';

const phoneBook = 
{
    'Marcus Aurelius': '+380445554433',
    'Seneca': '+380445556677',
    'Epictetus': '+380445558899'
};


function findPhoneByName(name) 
{
    return phoneBook[name] || 'Phone number not found'; 
}


console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Socrates'));

module.exports = { findPhoneByName };