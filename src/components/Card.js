import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ value, image }) => (
  <div className="card" key={value}>
    <Link to={`/${value}`}>
      <img className="card-img-top" src={image} alt={value} />
    </Link>
  </div>
)

Card.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Card