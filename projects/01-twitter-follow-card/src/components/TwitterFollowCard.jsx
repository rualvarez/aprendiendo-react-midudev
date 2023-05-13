import React from "react";
import './../styles/TwitterFollowCard.css';

export function TwitterFollowCard({ username, name, avatar }) {
  return(
    <div className='tw-follow-card'>
      <div className='tw-follow-card-header'>
        <img className='tw-follow-card-avatar' src={`https://unavatar.io/${avatar}`} alt={`Avatar de ${name}`} />
        <div className='tw-follow-card-info'>
          <strong className='tw-follow-card-info-name'>{name}</strong>
          <span className='tw-follow-card-info-username'>{username}</span>
        </div>
      </div>
      <div className='tw-follow-card-button'>
        <button>Seguir</button>
      </div>
    </div>
  )
}