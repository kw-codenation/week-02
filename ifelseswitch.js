console.log("Week 2 Day 1 (If Else Switch)")

console.log("\nAcivity 1")
console.log("=========")

let age = 18;
let country = "France"

if (age >= 17 && country == "UK")
{
    console.log("Yes I can serve you")
}
else
{
    console.log("You aren't old enough and you are from the wrong country")
}

console.log("\nAcivity 2")
console.log("=========")

let topping = 'orange'

switch (topping)
{
    case 'red':
    case 'blue':
    case 'green':
        console.log("These are important to my pizza")
        break
    case 'yellow':
    case 'orange':
        console.log(`I dont mind ${topping} for my pizza`)
        break
    default:
        console.log(`${topping} should not be on my pizza`)
}

console.log("\nAcivity 3")
console.log("=========")

let password = 'wofflesss'
if (password.length < 8)
{
    console.log('password is too short')
}
else
{
    console.log(`your password is: ${password}`)
}

console.log("\nAcivity 4")
console.log("=========")

let num = 22
if (num % 3 == 0 || num % 5 == 0)
{
    console.log('This number is devisable by 3 or 5')
}
else
{
    console.log("something else")
}

console.log("\nAcivity 5")
console.log("=========")

num = 42

if (num % 3 == 0 && num % 5 == 0)
{
    console.log("FizzBuzz")
}
else if (num % 3 == 0)
{
    console.log("Fizz")
}
else if (num % 5 == 0)
{
    console.log("Buzz")
}
else
{
    console.log(`The number is ${num}`)
}


console.log("\nAcivity 6")
console.log("=========")

num = 101
let mun = num.toString().split('').reverse().join('')

if (num == mun)
{
    console.log(`${num} is a palindrome` )
}
else
{
    console.log(`${num} is not a palindrome` )
}

console.log("\nAcivity 7")
console.log("=========")

let time = 4
let placeOfWork = "I'm at Work"
let townOfHome = "I'm at home"

switch (time)
{
    case 7 : console.log(townOfHome);break;
    case 8 : console.log("I'm commuting");break;
    case 9 : console.log(placeOfWork);break;
    default: console.log("I've transferred to another universe")
}

switch (true)
{
    case (time >= 7 && time < 8):
        console.log(townOfHome)
        break
    case (time >= 8 && time < 9):
        console.log("I'm commuting")
        break
    case (time >= 9):
        console.log(placeOfWork)
        break
    default:
        console.log("I'm in a trans dimensional state")
}

console.log("\nAcivity 8")
console.log("=========")

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh"
let vowles = ['a', 'e', 'i','o', 'u']

for (i = string.length; i > 0; i--)
{
    if (vowles.includes(string[i]))
    {
        console.log(`The last vowel (${string[i]}) can be found at index ${i}`)
        break;
    }
}

console.log("\nAcivity 9")
console.log("=========")

let word = "racecar"

if (word[0] == word[word.length -1])
{
    console.log(true)
}
else
{
    console.log(false)
}

console.log("\nAcivity 10")
console.log("=========")


let num1 = 8
let num2 = 3

if ((num1 + num2) % 2 == 0)
{
    console.log(num1 + num2)
}
else
{
    console.log(num1 * num2)
}