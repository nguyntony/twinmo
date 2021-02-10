import React, {createContext, useState} from 'react'

export const FundsContext = createContext();

export const FundsProvider = (props) => {
    const [updateFunds, setUpdateFunds] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [refreshSidebar, setRefreshSidebar] = useState(false)

    return (
        <FundsContext.Provider value={{updateFundsContext: [updateFunds, setUpdateFunds], toggleContext: [toggle, setToggle], refreshSidebarContext: [refreshSidebar, setRefreshSidebar]}}>
            {props.children}
        </FundsContext.Provider>
    )
}
