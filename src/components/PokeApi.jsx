import React from 'react'
import { useState } from 'react'






function PokeApi({ pokemon }) {

    

  return (
    <div>
        {pokemon.map(p =>(
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}



export default PokeApi;