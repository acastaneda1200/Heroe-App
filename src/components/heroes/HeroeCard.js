import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <>
            <div className="card" >
                <img style={{maxWidth: "22em"}} className="card-img-top" src={`./assets/heroes/${id}.jpg`} alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters)
                        && <p className="card-text">{characters}</p>
                    }
                    <footer className="footer">
                    <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                    </footer>
                    <Link to={`/heroe/${id}`} >
                        ...More
                    </Link>
                </div>
            </div>
        </>
    )
}
