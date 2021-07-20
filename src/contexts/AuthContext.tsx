import { createContext } from 'react';
import { AuthContextType } from 'contexts/AuthContextTypes';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);