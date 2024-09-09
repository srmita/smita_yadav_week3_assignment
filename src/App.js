import './App.css';
import {Space}  from 'antd';
import PageHeader from './Components/PageHeader';
import PageFooter from './Components/PageFooter';
import SideMenu from './Components/SideMenu';
import MainPage from './Components/MainPage';
function App() {
    return (
      <div className='App'>
          <PageHeader></PageHeader>
          <Space className='SideMenuContent' >
            <SideMenu></SideMenu>
            <MainPage></MainPage>
          </Space>
          <PageFooter></PageFooter>
      </div>
    );
  }
  
  export default App;
  
