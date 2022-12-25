import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null
})


export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(null)

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESSTOKEN')
        }
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser: () => { },
            setToken: () => { }
        }}>
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)

