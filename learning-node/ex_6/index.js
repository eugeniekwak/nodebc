const greet = (firstName, lastName, callback) => {
console.log(`Hi ${firstName} ${lastName}`)
callback()
}

let callBack = () => {
    console.log(`This code gets executed after the greet function call`)
}


greet('Brian', 'Shin', callBack)