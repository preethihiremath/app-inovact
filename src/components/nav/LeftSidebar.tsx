import React from 'react'
import home from '../../assets/images/icons/home.svg'
import projects from '../../assets/images/icons/projects.svg'
import ideas from '../../assets/images/icons/ideas.svg'
import subscribers from '../../assets/images/icons/subscribers.svg'

const LeftSidebar: React.FC = () => {
  return (
    <div className="feed__left">
      <div className="feed__left__links">
        <a className="feed__left__links__item" href="/">
          <img
            className="feed__left__links__item__image"
            src={home}
            alt="Home"
          />
          Home
        </a>
        <a className="feed__left__links__item" href="/">
          <img
            className="feed__left__links__item__image"
            src={projects}
            alt="My Projects"
          />
          Projects
        </a>
        <a className="feed__left__links__item" href="/">
          <img
            className="feed__left__links__item__image"
            src={ideas}
            alt="My Ideas"
          />
          My Ideas
        </a>
        <a className="feed__left__links__item" href="/">
          <img
            className="feed__left__links__item__image"
            src={subscribers}
            alt="Subcribers"
          />
          Subscribers
        </a>
      </div>
      <div className="feed__left__teams"></div>
    </div>
  )
}

export default LeftSidebar