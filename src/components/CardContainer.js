import React, { Component } from 'react'

import Card from './Card'

import { PlanningPoker } from '../cards'

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', image: '' }
  }

  componentDidMount() {
    const { match: { params: { cardValue } } } = this.props
    const selectedCard = PlanningPoker.find(card => card.value === cardValue) || {}
    this.setState({ ...selectedCard })
  }

  render() {
    return <Card {...this.state} />
  }
}

export default CardContainer