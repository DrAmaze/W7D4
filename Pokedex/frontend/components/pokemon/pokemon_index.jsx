import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
// import LoadingIcon from './loading_icon';
// import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <section className="pokedex">
        <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
