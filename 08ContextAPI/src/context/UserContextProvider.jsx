import React from 'react'
import UserContext from "./UserContext"

const UserContextProvider = ({children} ) =>{       // children is just popassing values e.g - html div elements.
    const [user, setUser] = React.useState(null);  // Just passing children as it is.
    return(
        <UserContext.Provider value ={{user, setUser}}>
        {children}             
        </UserContext.Provider>
    )
}
export default UserContextProvider