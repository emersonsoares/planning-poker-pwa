import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const Deck = ({ cards }) => (
  <div className="card-deck">
    {cards.map(card => <Card key={card.value} {...card} />)}
  </div>
)

Deck.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Deck