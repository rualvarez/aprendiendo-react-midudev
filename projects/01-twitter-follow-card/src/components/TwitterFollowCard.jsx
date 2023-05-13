import React, { useState } from "react";
import './../styles/TwitterFollowCard.css';

export function TwitterFollowCard({ children, username, avatar, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return(
    <div className='tw-follow-card'>
      <div className='tw-follow-card-header'>
        <img className='tw-follow-card-avatar' src={`https://unavatar.io/${avatar}`} alt={`Avatar de ${children}`} />
        <div className='tw-follow-card-info'>
          <strong className='tw-follow-card-info-name'>{children}</strong>
          <span className='tw-follow-card-info-username'>{username}</span>
        </div>
      </div>
      <div className='tw-follow-card-button' onClick={handleClick}>
        <button>{buttonText}</button>
      </div>
    </div>
  )
}