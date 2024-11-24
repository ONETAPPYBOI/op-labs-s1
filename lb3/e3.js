function ipToNumber(ip = '127.0.0.1') 
{
    return ip
        .split('.') 
        .map(Number)
        .reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
}

console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'));