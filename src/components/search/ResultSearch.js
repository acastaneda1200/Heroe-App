import React, {  useEffect, useState } from 'react'
import { getHeroeBySearch } from '../../selectors/getHeroeBySearch';




export const ResultSearch = ({setNewHeroes}) => {

    const [searchHeroe, setSearchHeroe] = useState('');
   

    const handleInputChange = (e) => {

        setSearchHeroe(e.target.value);

    }

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
          
            <input className="form-control mr-sm-2" type="search" onChange={handleInputChange} placeholder="Buscar Heroe" aria-label="Search" />
           
        </>
    )
}
