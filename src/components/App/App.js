import PokemonForm from 'components/PokemonForm';
import PokemonInfo from 'components/PokemonInfo';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  // state = {
  //   pokemon: null,
  //   loading: false,
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName: pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />

        {/* {this.state.loading && <h1>Загружаем...</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
      </div>
    );
  }
}
