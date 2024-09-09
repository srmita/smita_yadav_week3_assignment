import { Card, Space, Statistic, Typography } from "antd";
import {RiseOutlined, FireOutlined, FieldTimeOutlined} from '@ant-design/icons';


function Dashboard(){
    return (
    <div>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
            <DashboardCard icon={<RiseOutlined 
                style={{
                    color:"green",
                    backgroundColor:"rgba(0,255,0,0.25)",
                    borderRadius:20,
                    fontSize:24,
                    padding: 8,}} />} title={"Steps taken"} value={1234}></DashboardCard>
            <DashboardCard icon={<FireOutlined  
                style={{
                    color:"red",
                    backgroundColor:"#ff4d4f82",
                    borderRadius:20,
                    fontSize:24,
                    padding: 8,}} /> } title={"Calories burned"} value={1234}></DashboardCard>
            <DashboardCard icon={<FieldTimeOutlined  
                style={{
                    color:"blue",
                    backgroundColor:"#814dff82",
                    borderRadius:20,
                    fontSize:24,
                    padding: 8,}} />} title={"Workout time"} value={1234}></DashboardCard>
 
        </Space>
    </div>
    );
}

function DashboardCard({title, value, icon}){
    return(
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}></Statistic>
            </Space>
        </Card>
    )
}
export default Dashboard