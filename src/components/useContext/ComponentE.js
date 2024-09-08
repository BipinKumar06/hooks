import React, { useContext } from 'react'

import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from '../UseContextClass'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        channel is {channel} and user is {user}
        <ComponentF/>
    </div>
  )
}

export default ComponentE