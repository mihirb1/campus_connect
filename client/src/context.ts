import { createContext } from 'react';
import { User } from './User';

interface UserContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}
export const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: () => {},
})