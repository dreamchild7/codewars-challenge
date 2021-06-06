// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// function list(names){
//     const array = ()=> name, {
//      return array =   names.toString().join()
//     }
// }list([{name:"jane"}, {name:"peace"}, {name:"kelvin"}])


function list(names){



if(names.length > 1){
const others = names.splice(0, names.length - 1).map(p => p.name).join(', ')
const last = names[names.length - 1].name;
return console.log(`${others} & ${last}`)
}else if(names.length === 1){
return console.log(names[0].name) 
}else {
    return console.log("")
}

    


}list([{name:"jane"}, {name:"becker"}, {name:"joy"}, {name:"john"}])

