import React from 'react'
import  { CircularProgress} from '@mui/material';
import './Loading.scss';
const Loading = () => {
  return (
    <div className='loading' >
      <CircularProgress
      disableShrink
      color='inherit'
      />
    </div>
  )
}

export default Loading
