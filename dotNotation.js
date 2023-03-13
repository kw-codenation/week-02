console.log("Week 2 Day 1 (Dot Notation)")
console.log("===========================")

console.log('\nActivity 1')
console.log('----------')

console.log("\nMethod 1")

console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")

console.log("\nMethod 2")

let dashanddots = new Array('   |   |   ', '-')

for (i = 1; i < 12;i++)
{
    if ([4,8].includes(i))
    {
        let dash = ''
        for (j = 1; j < 12; j++)
        {
            dash += dashanddots[1]
        }
        console.log(dash)
    }
    else
    {
        console.log(dashanddots[0])
    }
}