import React from 'react'
import { Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';


const SkeletonProduct = () => {
  return (
    <Stack height='100%' spacing={1} >
      <Skeleton variant='circular'></Skeleton>
      <Skeleton variant='text' width='70%'></Skeleton>
      <Skeleton variant='text' width='50%'></Skeleton>
    </Stack>
  )
}

export default SkeletonProduct
