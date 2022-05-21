// This function returns an object containing all of the information for the away and home teams
function gameObject () {
    const gameInformation = {
        'home': {
            'teamName': 'Brooklyn Nets',
            'colors': ['Black', 'White'],
            'player': {
                'Alan Anderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1
                },
                'Reggie Evans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'Brook Lopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15
                },
                'Mason Plumlee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'Jason Terry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            },
        },
        'away': {
            'teamName': 'Charlotte Hornets',
            'colors': ['Turqoise', 'Purple'],
            'player': {
                'Jeff Adrien': {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'DeSagna Diop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'Ben Gordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'Brendan Haywood': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                }
            },
        }
    }
    return gameInformation;
}

addSubmitFormListener()
bigShoeRebounds()

//creates an submit form listener and adds it to each of the forms in the dom.
function addSubmitFormListener() {
    let allForms = document.querySelectorAll('form')
    // 
    for (let eachForm of allForms) {
        eachForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const eventClass = e.target.className
            const id = `${e.target.id}-input`
            // 
            handleSubmitEventListener(document.querySelector(`#${id}`).value, eventClass)
            eachForm.reset()
        })
    }
}

//Takes in the search term and the event class and decides based on the event class which function to use.
function handleSubmitEventListener(input, eventClass) {
    // 
    if (eventClass === 'player-score') {
        numPointsScored(input, eventClass);
    }
    if (eventClass === 'shoe-size') {
        shoeSize(input, eventClass);
    }
    if (eventClass === 'team-colors') {
        teamNames(input, eventClass)
    }
    if (eventClass === 'jersey-number') {
        playerNumbers(input, eventClass)
    }
    if (eventClass === 'player-stats') {
        playerStats(input, eventClass)
    }
}




//Takes in a player name and gets the number of points scored by that player. Takes in the event class and passes it to addOutputToScreen.
//passes the points scored to addOutputToScreen.
function numPointsScored(playerName, eventClass) {
    let pointsScored
    const obj = gameObject();
    for (let team in obj){
        const teamPlayers = obj[team].player
        for (let players in teamPlayers) {
            if (players === playerName){
                pointsScored = obj[team].player[playerName].points;
            }
        }
    }
    addOutputToScreen(pointsScored, eventClass, playerName)
}

//Takes in a player name and gets the shoe size of that player. Takes in the event class and passes it to addOutputToScreen. passes the player's
//shoe size to addOutputToScreen.
function shoeSize(playerName, eventClass) {
    let shoeSize
    const obj = gameObject();
    for (let team in obj){
        const teamPlayers = obj[team].player
        for (let players in teamPlayers) {
            if (players === playerName){
                shoeSize = obj[team].player[playerName].shoe;
            }
        }
    }
    addOutputToScreen(shoeSize, eventClass, playerName)
}

//Takes in the teamName and locates the colors for that team. concatenates those colors into a string. passes the string to
//addOutputToScreen
function teamNames(teamName, eventClass){
    let colorsArray = []
    const obj = gameObject();
    // 
    for (let team in obj){
        const potentialTeamName = obj[team].teamName
        if (potentialTeamName === teamName) {
            colorsArray = [...obj[team].colors]
        }
        // 
    }
    const colorsString = colorsArray.join(' and ')
    addOutputToScreen(colorsString, eventClass, teamName)
}

//takes in an argument of a team name. creates an array with all of the jersey numbers for that team name. Concatenates those jersey numbers
//into one large string. passes the string and the eventClass to addOutputToScreen
function playerNumbers(teamName, eventClass){
    let jerseyNumbersarray = []
    const obj = gameObject();
    // 
    for (let team in obj){
        const potentialTeamName = obj[team].teamName
        const playersObject = obj[team].player
        if (potentialTeamName === teamName) {
            for (let eachPlayer in playersObject) {
                jerseyNumbersarray = [...jerseyNumbersarray, obj[team].player[eachPlayer].number]
            }
        }
        // 
    }
    const jerseyNumberstring = jerseyNumbersarray.slice(0,-1).join(', ') + `, and ${jerseyNumbersarray[jerseyNumbersarray.length - 1]}`
    addOutputToScreen(jerseyNumberstring, eventClass, teamName)
}

//takes in a player name and the eventClass. finds the player with the matching name and returns an object with that player's stats. passes the
//event class, the stats object, and the player name to buildStatsTable.
function playerStats(playerName, eventClass) {
    let playerStats = {}
    const obj = gameObject();
    
    for (let team in obj){
        const teamPlayers = obj[team].player
        
        for (let players in teamPlayers) {
            if (players === playerName){
                playerStats = obj[team].player[playerName];
            }
        }
    }
    
    buildStatsTable(playerStats, eventClass, playerName)
}


function bigShoeRebounds() {
    let biggestShoeSizePlayer = ''
    let currentBiggestShoeSize = 0
    let reboundsOfBiggestShoeSizePlayer = 0
    const eventClass = 'big-shoe-rebounds'
    debugger
    const obj = gameObject();
    for (let team in obj){
        const teamPlayers = obj[team].player
        debugger
        for (let onePlayer in teamPlayers) {
            let playerShoeSize = obj[team].player[onePlayer].shoe
            debugger
            if (playerShoeSize > currentBiggestShoeSize){
                debugger
                biggestShoeSizePlayer = onePlayer
                currentBiggestShoeSize = obj[team].player[biggestShoeSizePlayer].shoe
                reboundsOfBiggestShoeSizePlayer = obj[team].player[biggestShoeSizePlayer].rebounds
                debugger
            }
        }
    }
    addOutputToScreen(reboundsOfBiggestShoeSizePlayer, eventClass, biggestShoeSizePlayer)
}





//takes in the playerStats, eventClass, and player name. passes the eventClass to deleteAndAppendNewChild to delete the p element associated with
//the player stats div. creates a table with the playername as the title and the stats as the data.
function buildStatsTable(playerStats, eventClass, playerName) {
    deleteAndAppendNewChild(eventClass)
    
    const tableHeader = document.createElement('thead')
    const tableTitle = document.createElement('th')
    const para = document.querySelector(`div.${eventClass} p`)
    
    tableTitle.textContent = playerName
    tableHeader.append(tableTitle)
    
    const tableBody = document.createElement('tbody')
    const playerStatsArray = Object.entries(playerStats)
    
    for (let stat of playerStatsArray) {
        
        const tableElementRow = document.createElement('tr')
        const tableElementColumn1 = document.createElement('td')
        const tableElementColumn2 = document.createElement('td')
        
        tableElementColumn1.textContent = stat[0]
        tableElementColumn2.textContent = stat[1]
        tableElementColumn2.className = 'data-column'

        tableElementRow.append(tableElementColumn1, tableElementColumn2)
        tableBody.append(tableElementRow)
    }
    
    tableTitle.colSpan = playerStatsArray[0].length
    para.append(tableHeader, tableBody)
}

//takes in an event class and deletes the p element associated with that class's div. creates a new p element and appends it to the div.
function deleteAndAppendNewChild(eventClass) {
    
    const div = document.querySelector(`div.${eventClass}`)
    
    // div.removeChild(document.querySelector(`div.${eventClass} p`))
    div.textContent = ''
    const newP = document.createElement('p')
    newP.className = 'result'
    
    div.append(newP)
}


//takes in the desired output and the event class. Locates a p element based on the eventClass. Changes the p element's text content to match the
//output and changes the class to 'result'.
function addOutputToScreen(output, eventClass, input) {
    const para = document.querySelector(`div.${eventClass} p`)
    const result = document.querySelector(`div.${eventClass} p strong`)
    const originalInput = document.querySelector(`div.${eventClass} p em`)
    debugger
    para.className = 'result'
    result.textContent = output
    originalInput.textContent = `${input}'s`
}






// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use  to drop into your function and understand what it is returning and why.
// Bonus Questions
// Define functions to return the answer to the following questions:

// Which player has the most points? Call the function mostPointsScored.
// Which team has the most points? Call the function winningTeam.
// Which player has the longest name? Call the function playerWithLongestName.
// Super Bonus
// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.