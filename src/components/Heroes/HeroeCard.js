import React from 'react'
import { Link } from 'react-router-dom'
import { heroesImgs } from '../../helpers/heroesImgs'
import './Heroes.css'


export const HeroeCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
    return (
        <div className="col-sm-4 mt-2">
            <div className="card ms-3 text-white" style={ {maxWidth: 540} }>
                <img src={ heroesImgs(`./${id}.jpg`).default } alt={superhero}></img>
                <div className="card-img-overlay d-flex align-items-end">
                    <div className="card-body" style={ {backgroundColor: "black", opacity: "80%"}}>
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) && <p className="card-text">test{ characters }</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/heroe/${ id }`} className={`Boton d-grid ${superhero} BotonNoCond`}>
                            <p align="center" className="textoP">Ver Más...</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
