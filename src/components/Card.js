import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ value, image, isSelected = false }) => {
  const actionCard = (  
    <div className="col-4 mt-2 col-sm-3 mt-sm-3 col-md-3 col-lg-2 mt-lg-4">
      <div className="card" key={value}>
        <Link to={`/${value}`}>
          <img className="card-img-top" src={image} alt={value} />
        </Link>
      </div>
    </div>
  )

  const selectedCard = <img src={image} alt={value} style={{ maxHeight: '100vh' }} />

  return isSelected ? selectedCard : actionCard
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default Card