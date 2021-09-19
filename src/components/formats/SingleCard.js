import React from 'react'

function SingleCard(props) {
  return (
    <>
      <li className="cards__item">
      <a target="_blank" href={props.path} rel="noreferrer" className="cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className='cards__item__img'
            alt="Project Graphics"
            src={props.arc}
          />
        </figure>
        <div>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </a>
      </li>
    </>
  )
}

export default SingleCard
