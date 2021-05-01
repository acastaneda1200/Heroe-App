import { heroes } from "../data/heroes";

export const getHeroeByPublisher = ( publisher ) => {
    const validPublisher = ["DC Comics", "Marvel Comics"];

    

    return heroes.filter((heroe)=> heroe.publisher === publisher);
}