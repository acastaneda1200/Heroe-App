import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroeBySearch } from '../../selectors/getHeroeBySearch';
import { useLocation } from 'react-router';

export const SearchPage = ({ history }) => {

    const location = useLocation();
    const { q } = queryString.parse(location.search);
    
    const [values, handleInputChange, reset] = useForm({
        searchText: q
    })
    
    const { searchText } = values;
    const heroesFiltered = useMemo(() => getHeroeBySearch(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
       
    }

    return (
        <div>
            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Buscar Heroe"
                            className="form-control"
                            name="searchText"
                           
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn mt-3 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    {
                        (heroesFiltered != '') ?
                        heroesFiltered.map((heroe) => (
                            <HeroeCard key={heroe.id}
                                {...heroe}
                            />
                        ))
                        :
                        <h5>No se encontraron resultados</h5>
                    }
                </div>
            </div>
        </div>
    )
}
