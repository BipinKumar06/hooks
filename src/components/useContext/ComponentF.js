import React from 'react'
import { UserContext,ChannelContext } from '../UseContextClass'
function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => (
                    <ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>
                                    User context value {user},channel context value {channel}
                                </div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF