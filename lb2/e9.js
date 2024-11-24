'use strict';

const phoneBook = 
[
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Seneca', phone: '+380445556677' },
    { name: 'Epictetus', phone: '+380445558899' }
];

function findPhoneByName(name) 
{
    for (let contact of phoneBook) 
    {
        if (contact.name === name) 
        {
            return contact.phone;
        }
    }
    return 'Phone number not found'; 
}


console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Socrates'));

module.exports = { findPhoneByName };