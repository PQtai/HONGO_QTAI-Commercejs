import React, { useRef } from 'react'
import Intro from './Intro'
import clsx from 'clsx';
import styled from '../Container.module.scss';
const BodyContainer = () => {
  const advice = useRef({
    name : 'Great Selection',
    description : 'Follow the most popular trends and get exclusive items from hongo shop'
  })
  const Latest = useRef({
    name : 'Latest Blogs',
    description : 'Way is there to get clothing you’re sure to love than by making it your know'
  })
  return (
    <div className={clsx(styled.bodyContainer)} >
      <Intro props={advice}/>
      <Intro props={Latest}/>
    </div>
  )
}

export default BodyContainer
