import React from "react";
import './../styles/TwitterFollowCard.css';

export function TwitterFollowCard() {
  return(
    <div className='tw-follow-card'>
      <div className='tw-follow-card-header'>
        <img className='tw-follow-card-avatar' src='https://unavatar.io/twitter/midudev' alt='Avatar de Midudev' />
        <div className='tw-follow-card-info'>
          <strong className='tw-follow-card-info-name'>Miguel Ángel Durán</strong>
          <span className='tw-follow-card-info-username'>midudev</span>
        </div>
      </div>
      <div className='tw-follow-card-button'>
        <button>Seguir</button>
      </div>
    </div>
  )
}