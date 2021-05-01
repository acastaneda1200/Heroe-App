import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcPage = () => {

    
    return (
        <div>
            <h1>Dc Page</h1>
            <HeroeList publisher={'DC Comics'} newHeroes={[]} />
        </div>
    )
}
