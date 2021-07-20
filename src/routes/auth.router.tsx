import { Route, Switch } from "react-router-dom";
import Login from '../pages/Login/index';

const AuthRouter = () => {
  return (
    <Switch>
        <Route exact={true} path='/' component={Login} />
    </Switch>
  );
}

export default AuthRouter;