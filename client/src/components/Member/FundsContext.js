import React, {createContext, useState} from 'react'

export const FundsContext = createContext();

export const FundsProvider = (props) => {
    const [updateFunds, setUpdateFunds] = useState(false)
    const [toggle, setToggle] = useState(true)

    return (
        <FundsContext.Provider value={{updateFundsContext: [updateFunds, setUpdateFunds], toggleContext: [toggle, setToggle]}}>
            {props.children}
        </FundsContext.Provider>
    )
}
