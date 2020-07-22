import React from "react"

const Card = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt="blank" className="cover-img" />
      <div className="item-title">{title}</div>
    </div>
  )
}

export default Card
