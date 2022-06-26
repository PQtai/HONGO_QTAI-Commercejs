import React from 'react'
import BodyContainer from './BodyContainer'
import EndContainer from './EndContainer'
import HeadContainer from './HeadContainer'
import clsx from 'clsx'
import styles from './Container.module.scss';
const Container = () => {
  return (
    <div className={clsx(styles.container)} >
      <HeadContainer/>
      <BodyContainer/>
      <EndContainer/>
    </div>
  )
}

export default Container
