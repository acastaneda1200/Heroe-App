import { heroes } from "../data/heroes";

export const getHeroeBySearch = (inputText = '') => {

  if (inputText === ''){
    return [];
  }
   const search = heroes.filter(({superhero})=>{
   return  superhero.toLowerCase().includes(inputText)
   }) 
  return search;
}
