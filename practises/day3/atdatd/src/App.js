import logo from './logo.svg';
import AntDesignLogo from './AntDesign.svg';
import 'antd/dist/antd.css';
import './App.css';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Input, Menu, Row, Col} from 'antd';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <h1>
            <a id="logo" href="/index-cn">
              <img alt={"logo"} src={logo} />
              Ant Design
            </a>
          </h1>
        </Col>
        <Col>     
          <Input id="searchbox" placeholder="搜索" />
        </Col>
        <Col>
          <Menu id="menu" mode="horizontal">
            <Menu.Item>设计</Menu.Item>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>组件</Menu.Item>
            <Menu.Item>资源</Menu.Item>
            <SubMenu title="" icon={< UnorderedListOutlined />}>
              <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
      <div class="home-container">
        <div class="home-banner">
          <div class="home-banner-background">
            <img alt="background" src={ AntDesignLogo }></img>
          </div>
        </div>
        <div class="home-banner-holder">
          <div class="home-banner-content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
