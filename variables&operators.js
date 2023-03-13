/* I am assuming that the eighth character is 'n' (i.e. space is not a character!!)*/
console.log('CLASS ACTIVITIES')
let str = "All Around the world"
console.log("All Arou" + str[8].toUpperCase() + "d the world")
console.log("All Around the World".charAt(8).toUpperCase())
console.log("All Around the World"[8].toUpperCase());

let favouriteDrink = "coffee"
console.log(favouriteDrink)
console.log("My favourite drink is " + favouriteDrink)
console.log(`My favourite drink is ${favouriteDrink}`)

let a_name = "Vlad The Impaler"
let an_age = "really old"
let favDrink = "blood"

console.log(`Hi my name is ${a_name} and I am ${an_age} and my favourite drink is ${favDrink}.`)



console.log("\nActivity 1")
console.log("===========")

let name = "tom"
let age = 8
let colour = "brown"

console.log(`Hi my name is ${name} and I am ${age} years old and my favourite colour is ${colour}.`)

name = "Adolph"
age = 30
color = "blue"

console.log(`Hi my name is ${name} and I am ${age} years old and my favourite colour is ${colour}.`)

console.log("\nActivity 2")
console.log("===========")

let time = "Today"
let breakfast = "toast"
let lunch = "a bacon and lettece (BLT) sandwich"
let dinner = "a lamb hotpot"

console.log(`${time} I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)

time = "Tomorrow"
breakfast = "bacon and eggs"
lunch = "an apple"
dinner = "an irish stew"

console.log(`${time} I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)

console.log("\nActivity 3")
console.log("===========")

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let bdate = new Date(1438, 3, 19)
let dbdate = days[bdate.getDay()] + ' ' + bdate.getDate() + ' ' + months[bdate.getMonth()] + ' ' + bdate.getFullYear()
let tdate = new Date()
let dtdate = days[tdate.getDay()] + ' ' + tdate.getDate() + ' ' + months[tdate.getMonth()] + ' ' + tdate.getFullYear()

let ndays = Math.floor((tdate.getTime() - bdate.getTime())/(1000*60*60*24));

console.log("My birth date is " + dbdate + " (I'm a vampire), todays date is " + dtdate + ". Days difference is " + ndays.toLocaleString("en-US") + " days")

console.log("\nActivity 4")
console.log("===========")

let space = ['o', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
let space1 = 'x'
let space2 = 'o'
let space3 = ' '
let space4 = 'x'
let space5 = 'x'
let space6 = ' '
let space7 = 'o'
let space8 = ' '
let space9 = ' '
let line = "   |   |   "
let dashes = "-----------"
let pipe = "|"

console.log(line)
console.log(` ${space1} ${pipe} ${space2} ${pipe} ${space3}`)
console.log(line)
console.log(dashes)
console.log(line)
console.log(` ${space4} ${pipe} ${space5} ${pipe} ${space6}`)
console.log(line)
console.log(dashes)
console.log(line)
console.log(` ${space7} ${pipe} ${space8} ${pipe} ${space9}`)
console.log(line)
