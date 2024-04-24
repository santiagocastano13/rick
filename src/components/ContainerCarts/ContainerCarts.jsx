import React, { useEffect } from 'react'
import { Carts } from '../Carts/Carts'
import logo from '../../assets/react.svg'
import { useState } from 'react'


export const ContainerCarts = () => {
    const [characters, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=40')
        .then(response => response.json() )
        .then( characters => {
            setCharacter(characters.result)
        })
    }, [])
    
    
  return (
    <div className='w-full h-full bg-slate-500 flex justify-evenly'>
        <Carts character={logo}/>
        <Carts character={logo}/>
        <Carts character={logo}/> 
        {
              characters.map(character => 
                <div className="items" key={character.id}>
                <Carts img={character.img} name={character.name} specie={character.species} />
            </div>
            )
        }
    </div>
  )
}
