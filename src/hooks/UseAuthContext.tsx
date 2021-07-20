import { useContext } from "react";

import { AuthContextType } from "contexts/AuthContextTypes";
import { AuthContext } from "contexts/AuthContext";

const useAuthContext = () => {
  return useContext<AuthContextType>(AuthContext);
};

export default useAuthContext;