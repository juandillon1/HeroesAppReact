import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroesImgs } from '../../helpers/heroesImgs';
import { getHeroeById } from '../../selectors/getHeroeById';

// import batmanImg from '../../assets/heroes/dc-batman.jpg'; Recurso estático

export const HeroesScreen = ({history}) => {
    const {heroeId} = useParams();
    const heroe = useMemo(() => getHeroeById( heroeId ), [heroeId]);
    if(!heroe){
        return <Redirect to="/" />
    }
    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        } else{
            history.goBack();
        }
    };
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    //src={`../assets/heroes/${heroeId}.jpg`} desde public/assets
                    // src={batmanImg} con import
                    src={heroesImgs(`./${heroeId}.jpg`).default}
                    className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero} style={{maxHeight:540}}/>
            </div>
            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5> Characters </h5>
                <p>{characters}</p>
                <div className="d-grid">
                    <button className="btn btn-danger" onClick={handleReturn} style={{padding: "2%"}}>
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
