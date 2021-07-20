import { ReactNode, useEffect, useState } from 'react';
import { IDefaultTheme } from 'interfaces/IDefaultTheme';
import { IUser } from 'interfaces/IUser';
import { IUserForm } from 'interfaces/IUserForm';
import { AuthContext } from './AuthContext';

interface AuthContextProps {
  children: ReactNode
}
const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);

 const login = async (user: IUserForm) => {
   if (user.email === 'teste@teste.com' && user.password === '123456') {
     const userLogged = {
       name: 'Fabio Santos',
       email: 'fabio@teste.com'
     }

     setUser(userLogged);
     localStorage.setItem('@App:user', JSON.stringify(userLogged));
     setIsLogged(true);
   }
 }

 const logOut = () => {}

  return (
    <AuthContext.Provider
      value={{
        signed: isLogged,
        user,
        login,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;