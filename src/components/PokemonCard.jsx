import PropTypes from 'prop-types'

function PokemonCard(props) {
  return (
    <div>
        {props.pokemonData}
    </div>
  )
}

PokemonCard.propTypes = {
    pokemonData: PropTypes.string
};

export default PokemonCard
