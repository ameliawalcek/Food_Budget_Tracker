import React from 'react'
import Loader from 'react-loader-spinner'
import { useStyles } from '../Styles/Loader'

function Loading() {
  const classes = useStyles()

  return (
    <div className={classes.loader}>
      <Loader type='ThreeDots' color='#954bb4' height={150} width={150} />
    </div>
  )
}

export default Loading
