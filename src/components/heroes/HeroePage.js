import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroePage = ({history}) => {

    const { heroeId: id } = useParams();
    

    const data = useMemo(() => getHeroeById(id), [id])

    if (!data) {
        return <Redirect to="/" />;
    }

    const {
        superhero,
       // publisher,
        alter_ego,
        first_appearance,
        //characters
    } = data;

    const handleReturn = () => {
        console.log();
        if (history.length <= 2) {
            history.push('/');
        }else{
            history.goBack();
        }
      
    }

    const mystyle = {
        margin: '0 auto',
        float: 'none',
        maxWidth: "30rem"
        
      };

    return (
        <div className="text-center">
        
        <button style={{maxWidth: "21em", width: "30em"}} className="btn btn-outline-primary mb-2" onClick={handleReturn}>Return</button>
        <div className="card mb-3 " style={mystyle}>
            <img className="card-img-top animate__animated  animate__flipInX" src={`../assets/heroes/${id}.jpg`} alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
            </div>
        </div>
        </div>
    )
}
