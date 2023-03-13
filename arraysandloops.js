console.log("Week 2 Day 3 (Arrays & Loops)")
console.log("===================")

console.log("\nActivity 1")
console.log("----------")
console.log("\nDisplay array 'songs'")
let songs = ["Shout", "Frozen", "Xanadu"]
console.log(songs)
console.log("\nAdd two more songs and re-display the array 'song'")
songs.push("Paint It Black")
songs.push("Africa")
console.log(songs)
console.log("\nDelete the last entry in 'songs' and display the array")
songs.pop()
console.log(songs)

console.log("\nActivity 2")
console.log("----------")
console.log("Demonstrate the method shift() which removes the first item from the array")
console.log("\nDisplay the array 'songs'")
console.log(songs)
console.log("\nRemove the first entry using shift() and re-display the array 'songs'")
songs.shift()
console.log(songs)

console.log("\n\nWeek 2 Day 3 Loops")
console.log("===================")
console.log("\nActivity 1")
console.log("----------")
console.log("\nCreate the array 'films', display this array")
let films = ["Casablanca", "Spiderman", "Ghostbusters", "Aladdin", "Brannigan"]
console.log(films)
console.log("\nAdd two more films to the array 'films', display the array")
films.push("Crash")
films.push("Destry Rides Again")
console.log(films)

console.log("\nDisplay each item of the arry 'films' using a 'for' loop")
for (let i = 0; i < films.length;i++)
{
    console.log(films[i])
}

console.log("\nActivity 2")
console.log("----------")

for (let i = 1; i <= 6; i++)
{
    console.log(i + '. ' + Math.floor(Math.random() * (50 - 1) + 1))
}

console.log("\nActivity 3")
console.log("----------")

console.log("\nUse a For loop to count the number of displays")

let j = 0;
for (let i = 0; i <= 9; i++)
{
    j++
    console.log(j + '. ' + i)
}

console.log("\nActivity 4")
console.log("----------")
console.log("\nDisplay array 'films'")
console.log(films)
console.log("\nUsing a 'for' loop inspect the array 'films' searching for the film 'Ghostbusters' ")

for (let i = 0; i < films.length;i++)
{
    if (films[i] == "Ghostbusters")
    {
        console.log("Yah it's Ghostbusters")
    }
    else
    {
        console.log("Boo we want Ghostbusters")
    }
}

console.log("\nActivity 5")
console.log("----------")
console.log("Use a for loop to display a random number between 1 and 30")
console.log("Display an extra message if the number is divisible by 7\n")

for (let i = 1; i <=6; i++)
{
    let ran = Math.floor(Math.random() * 30 + 1)
    if (ran % 7 == 0)
    {
        console.log(ran + " is divisable by 7")
    }
    else
    {
        console.log(ran)
    }
}

console.log("\nActivity 6")
console.log("----------")
let bobsFollowers = ["tom", "dick", "harry", "adolph"]
let hannahsFollowers = ["mary", "jane", "debbie", "adolph"]

for (let i = 0; i < bobsFollowers.length; i++)
{
    for (let j = 0; j < hannahsFollowers.length; j++)
    {
        if (bobsFollowers[i] == hannahsFollowers[j])
        {
            console.log("Duplicate Follower is " + bobsFollowers[i])
        }
    }
}

console.log("\nActivity 7")
console.log("----------")

console.log("\nA 'while' loop runs according to a condition, if the condition is not met the loop will not run")
console.log("A 'do-while' loop will always run once before applying a condition ")

console.log("\nThis loop only executes when x = 1")
WhileLoopy(0)

WhileLoopy(1)


function WhileLoopy(x)
{
    let z = 0
    console.log("x = " + x)
    while (x == 1)
    {
        z = 1
        x = 0
    }
    
    if (z == 1)
    {
        console.log('the while loop executed')
    }
    else
    {
        console.log('the while loop did not execute')
    }    
}

console.log("\nThis loop will execute at least once with x=0")
DoLoopy(0)
console.log("\nThis loop will execute more than once with x=1")
DoLoopy(1)

function DoLoopy(x)
{
    let z = 0
    console.log("x = " + x)

    do
    {
        x++
        z++
        let tim = ''
        if (z == 1)
        {
            tim = " time"
        }
        else
        {
            tim = " times"
        }
        console.log("loop executed " + z + tim)
    }
    while (x == 2)
   
}

let arr = ['hello', 'goodbye', 'go away']
for (const i of arr) {
    console.log(i);
  }


