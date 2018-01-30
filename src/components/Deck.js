import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const Deck = ({ cards }) => (
  <div className="card-deck">
    <div className="row">
      {cards.map(card => <Card key={card.value} {...card} />)}
    </div>
  </div>
)

Deck.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Deck