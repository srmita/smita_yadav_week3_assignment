import { Button, Form, Input, Typography } from "antd";

function Addrecord(){
    return <div>
        <Typography.Title level={4}>Add New Record</Typography.Title>
        <Form>
            <Form.Item label="Steps Taken" name="steps">
                <Input placeholder="steps taken"></Input>
            </Form.Item>
            <Form.Item label="Calories Burned" name="calories">
                <Input placeholder="Calories Burned"></Input>
            </Form.Item>
            <Form.Item label="Workout Time" name="workout">
                <Input placeholder="Workout Time"></Input>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit">Log In</Button>
            </Form.Item>
        </Form>
    </div>
}
export default Addrecord

