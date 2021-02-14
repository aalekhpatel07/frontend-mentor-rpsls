
const attack = {
    rock: {
        lizard: 'crushes',
        scissors: 'crushes'
    },
    paper: {
        rock: 'covers',
        spock: 'disproves'
    },
    scissors: {
        paper: 'cuts',
        lizard: 'decapitates'
    },
    lizard: {
        paper: 'eats',
        spock: 'poisons'
    },
    spock: {
        scissors: 'smashes',
        rock: 'vaporizes'
    }
}

const attackedBy = {
    rock: {
        paper: 'covered by',
        spock: 'vaporized by'
    },
    paper: {
        scissors: 'cut by',
        lizard: 'eaten by'
    },
    scissors: {
        rock: 'crushed by',
        spock: 'smashed by'
    },
    lizard: {
        rock: 'crushed by',
        scissors: 'decapitated by'
    },
    spock: {
        lizard: 'poisoned by',
        paper: 'disproved by'
    }
}

export const getFancyWord = (action1, action2) => {
    if(action1 && action2 && attack[action1] && attack[action1][action2]) return {word: attack[action1][action2], winner: 1};
    else if(action1 && action2 && attackedBy[action1] && attackedBy[action1][action2]) return {word: attackedBy[action1][action2], winner: 2};
    return {word: '', winner: 0};
    // Return how action1 compares against action2.
}