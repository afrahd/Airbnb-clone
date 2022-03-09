import React from 'react'
import './Card.css'
import katie from './assets/katie-zaferes.png'
import star from './assets/Star.png'



function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
         {/* {badgeText && <div className="card_badge">{badgeText}</div>} */}
<img src={katie} className="card_image" alt="cardimage"/>
<div className="card_stats">
    <img src={star} alt="star" className="card_star" />
    <span>{props.item.stats.rating}</span>
    <span className="gray">({props.item.stats.reviewCount}) • </span>
    <span className="gray">{props.item.location}</span>
</div>
<p className="card_title">{props.item.title}</p>
<p className="card_price"><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card