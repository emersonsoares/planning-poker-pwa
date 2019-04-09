import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Card from "./Card"
import coverImage from "../cards/cover.svg"

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = { valueSelected: "", isPreSelected: false }
  }

  handleFlipCard = ({ value }) =>
    this.setState({ isPreSelected: !this.state.isPreSelected, valueSelected: value })

  render() {
    if (this.state.isPreSelected) {
      return (
        <Link to={`/${this.state.valueSelected}`}>
          <Card value="COVER" image={coverImage} isSelected />
        </Link>
      )
    }

    return (
      <div className="card-deck">
        <div className="row">
          {this.props.cards.map(card => (
            <div
              onClick={() => this.handleFlipCard(card)}
              className="col-4 mt-2 col-sm-3 mt-sm-3 col-md-3 col-lg-2 mt-lg-4"
            >
              <Card key={card.value} {...card} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Deck
