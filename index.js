const User = require('./app/models/user')

const user =new User (1,"carlogilmar","Carlo","Bio")
console.log(user.id)
console.log(user.username)
console.log(user.name)
console.log(user.bio)
console.log(user.dateCreated)
console.log(user.lastUpdated + "\n")

console.log(user.getUsername)
console.log(user.getBio)
console.log(user.getDateCreated)
console.log(user.getLastUpdated + "\n")
user.setUsername = "Gilmar"
console.log(user.username)
user.setBio = "New bio"
console.log(user.bio)
