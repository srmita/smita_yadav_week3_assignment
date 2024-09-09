import {Menu} from "antd";
import {AppstoreOutlined, UserOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
    return (
      <div className="SideMenu">
        
          <Menu
            onclick={(item)=>{
              //item.key
              navigate(item.key);
            }}
            
            items={[{
              label:"Dashboard",
              icon: <AppstoreOutlined />,
              key: "/",
            },
          {
            label:"AddRecord",
            icon: <UserOutlined />,
            key:"/addrecord",
          }
        ]}
          ></Menu>
      </div>
    );
  }
  
  export default SideMenu;
  