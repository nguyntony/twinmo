import React, {createContext, useState} from 'react'

export const FundsContext = createContext();

export const FundsProvider = (props) => {
    const [updateFunds, setUpdateFunds] = useState(false)

    return (
        <FundsContext.Provider value={[updateFunds, setUpdateFunds]}>
            {props.children}
        </FundsContext.Provider>
    )
}