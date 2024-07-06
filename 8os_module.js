//OS module provides various properties and methods for interacting with the 
//operating system and the server

const os = require('os') //we are not going with ./ because it is a
//built-in module

//info about current user
const user = os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)