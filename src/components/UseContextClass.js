import React, { useState } from 'react'
import ComponentC from './useContext/ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function UseContextClass() {
    const [obj,setObj] = useState({show:false,text:"show useContext"})
    const handleShowuseContext = () =>{
    setObj({...obj,
        show:obj.show?false:true,
        text:obj.show?"show useContext":"hide useContext"
    })
    }
  return (
    <div>
        <button onClick={handleShowuseContext}>{obj.text}</button>
        { obj.show && (
            <div>
                Hello
                <UserContext.Provider value={'Vishwas'}>
                    <ChannelContext.Provider value={'ChannelDemo'}>
                      <ComponentC/>  
                    </ChannelContext.Provider>
                    
                </UserContext.Provider>
                
            </div>
        )}
    </div>
  )
}

export default UseContextClass