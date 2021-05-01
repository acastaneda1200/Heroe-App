import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const MarvelPage = () => {
   
    return (
        <div>
            <h1>Marvel Page</h1>
            <hr/>
            <HeroeList  publisher={'Marvel Comics'} newHeroes={[]} />
        </div>
    )
}
