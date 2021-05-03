import React, {  useEffect, useState } from 'react'


import { useHistory } from 'react-router-dom';



export const ResultSearch = ({setNewHeroes}) => {
    
    const [searchHeroe, setSearchHeroe] = useState('');
    const routerHistory = useHistory();
    console.log(routerHistory);

    
    const handleInputChange = (e) => {

        setSearchHeroe(e.target.value);
        routerHistory.replace(`/search?q=${searchHeroe}`)
    }


    //console.log(searchHeroe);
/* 
    useEffect(() => {
        if (searchHeroe.length > 0) {
            const searchPublisher = getHeroeBySearch(searchHeroe);

            setNewHeroes(searchPublisher)
        
            
        }else{
            setNewHeroes('')
        }

    }, [searchHeroe]) */



    return (
        <>
          
            <input className="form-control mr-sm-2" type="search" onChange={handleInputChange} value={searchHeroe} placeholder="Buscar Heroe" aria-label="Search" />
           
        </>
    )
}
