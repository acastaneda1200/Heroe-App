import React, { useContext, useMemo, useState } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { SearchContext } from '../search/SearchContext';
import { HeroeCard } from './HeroeCard';
import './HeroeList.scss';

export const HeroeList = ({ publisher }) => {

    const {newHeroes}   = useContext(SearchContext)
    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])
   
    return (
       
            <div className="card-columns animate__animated animate__bounceInLeft">
                {
                   (newHeroes.length == 0 )?
                    heroes.map((heroe) => (
                        <HeroeCard key={heroe.id}
                            {...heroe}
                        />
                    ))
                    :
                    newHeroes.map((heroe) => (
                        <HeroeCard key={heroe.id}
                            {...heroe}
                        />
                    ))


                }
            </div>
    

    )
}
