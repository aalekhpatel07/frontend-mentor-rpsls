
import { icons } from '../@compute/data';

const fetchRandomAction = (variant) => {
    let keys;
    if(variant == 'rps'){
        keys = Object.keys(icons.rps)
    }else{
        keys = Object.keys(icons.rpsls)
    }
    const idx = Math.floor(Math.random() * keys.length)
    return keys[idx]
}

export const move = (variant) => fetchRandomAction(variant);