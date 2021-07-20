import Content from 'components/Content';
import { FunctionComponent } from 'react';

// import { Container } from './styles';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>  
      <Content>
        {children}
      </Content>
    </>
  );
}

export default Layout;