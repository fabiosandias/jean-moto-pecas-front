import { BrowserRouter } from "react-router-dom";
import useAuthContext from 'hooks/UseAuthContext';
import AppRouter from "./app.router";
import AuthRouter from "./auth.router";
const Routes = () => {
  const { signed } = useAuthContext();

  return (
    <BrowserRouter>
      { !signed ? <AuthRouter /> : <AppRouter /> }
    </BrowserRouter>
  );
}

export default Routes;