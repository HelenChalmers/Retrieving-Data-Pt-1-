// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

//Craft Data Items
// The ink well is a craft data item
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }

  const paintSet = {
      name: "Paint Set",
      location: "Chest of Drawers",
      description: "I enjoy the paint set, as I love to paint countryside pictures."
  }

const pens = {
    name: "Pens",
    location: "Chest of Drawers",
    description: "I love my pens as I love to write."
}

const visionJournal = {
    name: "Vision Journal",
    location: "Writing Desk",
    description: "This vision Journal is where my dreams for the future are kept."
}

const stickers = {
    name: "Stickers",
    location: "Writing Desk",
    description: "I love STICKERSSSS!!!"
}
  
//Furniture
  // The writing desk is a furniture data item
  const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

  const headBoard = {
      name: "Head Board",
      location: "Bedroom",
      description: "This head board is special because my stepdad made it for me."
  }

  const Dresser = {
    name: "Chest of Drawers",
    location: "Bedroom",
    description: "This dresser is special because it was my first piece of furniture."
}

const piano = {
    name: "Piano",
    location: "Bedroom",
    description: "I learned piano as a kid and dream to get back into it."
}

const couch = {
    name: "Couch",
    location: "Living Room",
    description: "I love couches."
}

//crafts
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.crafts.push(paintSet)
HomeInventoryDatabase.crafts.push(pens)
HomeInventoryDatabase.crafts.push(visionJournal)
HomeInventoryDatabase.crafts.push(stickers)

//furniture
HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.furniture.push(couch)
HomeInventoryDatabase.furniture.push(piano)
HomeInventoryDatabase.furniture.push(Dresser)
HomeInventoryDatabase.furniture.push(headBoard)



const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

//const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
  //  const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    //return JSON.parse(databaseString)
//}
saveDatabase(HomeInventoryDatabase, "HomeInventory")