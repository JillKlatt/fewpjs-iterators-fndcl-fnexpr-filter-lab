// Code your solution here
function findMatching(drivers, string) {
    // console.log(drivers)
    // console.log(string)
    return drivers.filter( driver => 
        driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    let splitString = string.split('')
    return drivers.filter( driver => {
        let splitDriver = driver.split('')
        splitDriver[0].toLowerCase() === splitString[0].toLowerCase()
        console.log(splitDriver[0])
        console.log(splitString[0])

    })
}

// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }

function matchName(drivers, string){
    return drivers.filter(driver => 
        driver.name === string 
    )     
}