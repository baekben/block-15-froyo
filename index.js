
// create an object labeled customer and add key:value pairs

// object labeled customer
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

// correct email to Jak3Smith1992@email.com
customer["email"] = "Jak3Smith1992@email.com"

// correct phone number to 3195551234
customer["phone"] = 3195551234

// correct zip code to 63132
customer["zipCode"] = "63132"

// correct favoriteFlavors to coffee, strawberry, and matcha
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"]

// delete zipCode
delete customer["zipCode"]

// delete favoriteStore
delete customer["favoriteStore"]

// add toppings to customer object
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]

// add futureFlavors to customer object
customer.futureFlavors = "mango"

// add todaysPurchaseCost to customer object
customer.todaysPurchaseCost = 5.32

// get an array of only the key values in the object
let keyValues = Object.keys(customer)

// print out key values array
console.log(keyValues)