import React, {createContext, useState} from 'react'

export const FundsContext = createContext();

export const FundsProvider = (props) => {
    const [updateFunds, setUpdateFunds] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [test, setTest] = useState('default')

    return (
        <FundsContext.Provider value={{updateFundsContext: [updateFunds, setUpdateFunds], toggleContext: [toggle, setToggle], testContext: [test, setTest]}}>
            {props.children}
        </FundsContext.Provider>
    )
}