import { heroes } from "../data/heroes";

export const getHeroeBySearch = (inputText) => {
   const search = heroes.filter(({superhero})=>{
   return  superhero.toLowerCase().includes(inputText)
   }) 
  return search;
}
