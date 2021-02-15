import { writable } from 'svelte/store'

let storedScore = localStorage.getItem('rpsls-score')
if(storedScore == null || storedScore == undefined){
    storedScore = 0
}else{
    storedScore = Number.parseInt(storedScore)
}

export const score = writable(storedScore)

score.subscribe(value => {
    localStorage.setItem('rpsls-score', (value === null || value === undefined) ? 0 : value)
})
