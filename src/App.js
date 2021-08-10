import Header from './componments/Header/Index';
import RouterRoutes from './router/index';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './static/css/style.css'


function App() {
  return (
    <Layout>
      <Header/>
      <Layout.Content>
        <RouterRoutes />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
}

export default App;
