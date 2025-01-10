import { createContext } from 'react'

export const UserAuthContext = createContext(null)

export default function UserAuthProvider({children, value}) {

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}