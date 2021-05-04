import React, {  useContext, useEffect, useState } from 'react'
import { getHeroeBySearch } from '../../selectors/getHeroeBySearch';
import { SearchContext } from './SearchContext';



export const ResultSearch = () => {
   
   
    
    const [searchHeroe, setSearchHeroe] = useState('');
    const {setNewHeroes}   = useContext(SearchContext)
    
    const handleInputChange = (e) => {

        setSearchHeroe(e.target.value);
        
     
    }

    

    //console.log(searchHeroe);

    useEffect(() => {
        if (searchHeroe.length > 0) {
            const searchPublisher = getHeroeBySearch(searchHeroe);
           setNewHeroes(searchPublisher)
        
            
        }else{
            setNewHeroes('')
        }

    }, [searchHeroe])



    return (
        <>
        
            <input className="form-control mr-sm-2" type="search" onChange={handleInputChange} value={searchHeroe} placeholder="Buscar Heroe" aria-label="Search" />
        
        </>
    )
}
