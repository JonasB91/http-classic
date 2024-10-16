const uuid = require('uuid');

const users = []

exports.create = (user) => {
    user = {id: uuid.v4(), ...users};
    users.push(user);
    return user;
}

exports.readAll = () => {
    return users;
}

exports.read = (id) => {
    const user = users.find(user => user.id == id)
    return user;
}

exports.update = (id, user) => {
    const savedUser = users.find(aUser => aUser.id == id)
    if(user.hasOWnProperty("name")) {
        savedUser.name = user.name
    }
    if(user.hasOWnProperty("password")) {
        savedUser.password = user.password;
    }
    return savedUser;
}

exports.delete = (id) => {
    indx = users.findIndex(user => user.id === id);
    const user = users.splice(indx, indx)
    return user;
}