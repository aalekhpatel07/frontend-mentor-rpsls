
import { icons } from '../@compute/data';

const fetchRandomAction = () => {
    const keys = Object.keys(icons)
    const idx = Math.floor(Math.random() * keys.length)
    return keys[idx]
}

export const move = fetchRandomAction;