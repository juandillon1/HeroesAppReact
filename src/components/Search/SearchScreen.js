import React, {useMemo} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../Heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const {search} = useLocation();
    const { q = '' } = queryString.parse(search);
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`?q=${searchText}`);
    };
    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="searchText" value={searchText || ''} onChange={handleInputChange} placeholder="Find Hero" className="form-control"/>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary mt-3">
                                Search...
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '') && <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltrados.length === 0) && <div className="alert alert-warning">
                            There is no a hero with '{q}'
                        </div>
                    }
                    <div align="center">
                        {
                            heroesFiltrados.map( heroe => (
                                <HeroeCard key={heroe.id} {...heroe}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
