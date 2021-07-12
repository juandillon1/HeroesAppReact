import { heroes } from '../components/data/heroes'

export const getHeroesByName = (name = '') => {
    if(name === ''){
        return [];
    }
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase()));
}
