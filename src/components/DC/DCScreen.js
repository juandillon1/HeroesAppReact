import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const DCScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />
            <HeroeList publisher={'DC Comics'}/>
        </div>
    )
}
