import React from 'react';
import './PokeList.css';
import PokeCell from '../PokeCell/PokeCell'
import '../PokeCell/PokeCell.css'
import { pokeClasses } from '../PokeClass';

const PokeList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
      return (
        <PokeCell 
          key={pokeClass.id} 
          pokeClass={pokeClass} 
          handleOnClick={handleOnClick}
        />
      );
    });
  
  
    return (
      <section className="poke-list">
        {cells}
      </section>
    )
  }

export default PokeList;