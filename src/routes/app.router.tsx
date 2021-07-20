import Layout from 'components/Layout';
import Home from 'pages/Home';
import { Route, Switch } from 'react-router-dom';

// import { Container } from './styles';

const AppRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact={true} path='/' component={Home} />
      </Switch>
    </Layout>
  );
}

export default AppRouter;