import { writable } from 'svelte/store'

let storedScore = localStorage.getItem('rpsls_score')

if(storedScore == null || storedScore == undefined){
    storedScore = 0
}else{
    storedScore = Number.parseInt(storedScore)
}

export const score = writable(storedScore)

score.subscribe(value => {
    const to_set = (value === null || value === undefined) ? 0 : value
    localStorage.setItem('rpsls_score', to_set)
})
