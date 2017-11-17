import React, { Component } from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestSinglePokemon(nextProps.match.params.id);
    }
  }

  render() {
    const { pokemon, items } = this.props;
    console.log(this.props);
    if (!pokemon) return null;
    return (
      <section>
        <h2>{pokemon.name}</h2>
        <ul>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Type: {pokemon.poke_type}</li>
          {/* <li>Moves: {pokemon.moves.join(", ")}</li> */}
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
