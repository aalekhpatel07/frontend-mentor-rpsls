import { writable } from 'svelte/store'

let storedScore = localStorage.getItem('rpsls_score')
if(chrome && chrome.storage){
    chrome.storage.sync.get(['rpsls_score'], (result) => {
        storedScore = result
    })
}

if(storedScore == null || storedScore == undefined){
    storedScore = 0
}else{
    storedScore = Number.parseInt(storedScore)
}

export const score = writable(storedScore)

score.subscribe(value => {
    const to_set = (value === null || value === undefined) ? 0 : value
    localStorage.setItem('rpsls_score', to_set)
    if(chrome && chrome.storage){
        chrome.storage.sync.set({rpsls_score: to_set})
    }
})
