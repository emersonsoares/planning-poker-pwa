import React from "react"
import PropTypes from "prop-types"

const Card = ({ value, image, isSelected = false }) => {
  if (isSelected) {
    return <img src={image} alt={value} style={{ maxHeight: "100vh" }} />
  }

  const deckCard = (
    <div className="card" key={value}>
      <img className="card-img-top" src={image} alt={value} />
    </div>
  )
  return deckCard
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default Card
