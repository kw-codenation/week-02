console.log('Week 2 Day 5 (Objects)')
console.log('======================')

console.log('\nActivity 1')
console.log('----------')

const person = 
{
    name:'Vlad the Impaler',

    sayHi()
    {
        return 'Hi my name is ' + this.name
    }
}

console.log(person.sayHi())

console.log('\nActivity 2')
console.log('----------')

const pet =
{
    name:'',
    typeOfPet:'',
    age:0,
    colour:'',

    drink()
    {
        console.log(`Your dog ${this.name} is drinking water`)
    },

    eat()
    {
        console.log(`Your dog ${this.name} is eating beef`)
    }
}

pet.eat()
pet.drink()

console.log('\nActivity 3')
console.log('----------')

// Create label arrays for the food, drinks and branches
let database = []
database['food'] = {t:'toast', e:'eggs & bacon', h:'hamburger', s:'chicken schnitzil', f:'filet steak'}
database['drinks'] = {t:'tea', c:'coffee', h:'hot chocolate ', k:'coke', f:'fanta'}
database['branch-codes'] = ['b', 'e', 'l', 'c', 'o']

const coffeeShop = 
{
    branchs:{l:'Liverpool', e:'Edinburgh', b:'Belfast', c:'Cardiff', o:'London'}, 
    drinks: 
        // drink prices
        {b:{t:1, c:1, h:1, k:1, f:1}
        ,e:{t:2, c:2, h:2, k:2, f:2}
        ,l:{t:3, c:3, h:3, k:3, f:3}
        ,c:{t:4, c:4, h:4, k:4, f:4}
        ,o:{t:5, c:5, h:5, k:5, f:5}
        },
    food: 
        // food prices
        {b:{t:1, e:1, h:1, s:1, f:1}
        ,e:{t:2, e:2, h:2, s:2, f:2}
        ,l:{t:3, e:3, h:3, s:3, f:3}
        ,c:{t:4, e:4, h:4, s:4, f:4}
        ,o:{t:5, e:5, h:5, s:5, f:5}
        },

    drinksOrdered(branch='', order=[])
    {
        // validate the branch code
        if (database['branch-codes'].indexOf(branch) != -1)
        {
            // validate the orders
            if (order.length == 0)
            {
                console.log('\nDrink Prices for ' + this.branchs[branch])
                for (let i in this.drinks[branch])
                {
                    console.log(database['drinks'][i].padEnd(20) + '- £' + this.drinks[branch][i])
                }
            }
            else
            {
                // calculate the order
                this.calculateOrder(branch, 'drinks', order)
            }
        }
        else
        {
            // Print message if branch code is not valid
            this.printNotValidBranchCode()
        }
    },

    foodOrdered(branch='', order=[])
    {
        // validate the branch codes
        if (database['branch-codes'].indexOf(branch) != -1)
        {
            if (order.length == 0)
            {
                console.log('\nFood Prices for ' + this.branchs[branch])
                for (let i in this.food[branch])
                {
                    console.log(database['food'][i].padEnd(20) + '- £' + this.food[branch][i])
                }
            }
            else
            {
                //calculate order
                this.calculateOrder(branch, 'food', order)
            }
        }
        else
        {
            // Print message if branch code is not valid
            this.printNotValidBranchCode()
        }
    },

    calculateOrder(branch, type, order)
    {
        let price = 0
        let total = 0
        console.group(this.branchs[branch] + ' (' + type + ')')

        for(let v of order)
        {
            price = this[type][branch][v]
            total += price
            console.log(database[type][v].padEnd(15) + ' £' + price)
        }

        console.log('--------------------------------')
        console.log('total'.padEnd(15) + ' £' + total + '\n')

        console.groupEnd()
    },

    printNotValidBranchCode()
    {
        console.group('\nYou have not submitted a valid shop code, valid codes are ')
        console.log('b - belfast')
        console.log('e - edinburgh')
        console.log('l - liverpool')
        console.log('c - cardiff')
        console.log('o - london')
        console.groupEnd()
    }
}



// Drink order for liverpool
coffeeShop.drinksOrdered('l',['t', 'c', 'h', 'k'])

// Food order for liverpool
coffeeShop.foodOrdered('l', ['t', 'h'])

// Drink order for Cardiff
coffeeShop.drinksOrdered('c',['t', 'c', 'h', 'k'])

// This will give an error message as no branch code has been given
coffeeShop.drinksOrdered()

// This will give an error message as the incorrect branch code has been given
coffeeShop.foodOrdered('v')

// Food Prices for Cardiff
coffeeShop.foodOrdered('c')

// Drink Prices for Cardiff
coffeeShop.drinksOrdered('e')