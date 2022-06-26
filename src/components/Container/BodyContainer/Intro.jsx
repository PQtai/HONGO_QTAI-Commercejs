import clsx from 'clsx';
import React from 'react'
import styled from '../Container.module.scss'
const Intro = ({props}) => {
  return (
    <div className={clsx(styled.intro)} >
      <h3>{props.current.name}</h3>
      <p>{props.current.description}</p>
    </div>
  )
}

export default Intro
