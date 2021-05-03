import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroeCard } from './HeroeCard';
import './HeroeList.scss';

export const HeroeList = ({ publisher }) => {


    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])

    return (
        <div className="card-columns animate__animated animate__bounceInLeft">
            {

                heroes.map((heroe) => (
                    <HeroeCard key={heroe.id}
                        {...heroe}
                    />
                ))


            }
        </div>

    )
}
