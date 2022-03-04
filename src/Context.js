import React,{useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [currentId,setCurrentId] = useState(3)
    const [name,setName] = useState("Emily")

    return (
        <Context.Provider value={
            {
                setName,
                name,
                setCurrentId ,
                currentId,
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}