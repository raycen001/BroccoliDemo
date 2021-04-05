import React, {useState} from 'react';
import "./index.css";
import { Modal, Form, Input, Button } from 'antd';
import callout from "./util_callout.js";

const layout = {
    labelCol: { span: 0},
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: {span: 24},
};

const Dialog = ({
    isModalVisible,
    onCancel,
    onSuccess
}) => {
    const [btnLabel, setbtnLabel] = useState('Send');
    const [loading, setloading] = useState(false);
    const [errorTips, seterrorTips] = useState('');
    const handleOk = () => {
        onCancel(this);
    };

    const onFinish = async (values) => {
        setbtnLabel('Sending, please wait...');
        setloading(true);
        seterrorTips('');
        try {
            var result = await callout.submit(values.fullname,values.email);
            if (result == 200) {
                console.log('Success:', values);
                onSuccess(this);
            } else {

            }
        } catch (e) {
            console.log({e});
            seterrorTips(e);
        }
        setbtnLabel('Send');
        setloading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
    <>
        <Modal title="Requst an invite" 
                visible={isModalVisible}  
                onOk={handleOk} 
                onCancel={onCancel} 
                footer={null}
                destroyOnClose={true}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large"
                >
                <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Full name needs to be at least 3 characters long!', min:3 }]}
                >
                     <Input placeholder="Full Name" disabled={loading}/>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input a valid email', type: 'email'}]}
                >
                    <Input placeholder="Email" disabled={loading}/>
                </Form.Item>
                <Form.Item
                    name="confirm_email"
                    rules={[{ required: true, message: 'Please input a valid confirm email!', type: 'email' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('email') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two email that you entered do not match!'));
                                    },
                            }),
                        ]}
                >
                    <Input placeholder="Confirm Email" disabled={loading}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" block disabled={loading}>
                        {btnLabel}
                    </Button>
                </Form.Item>

                <p className="center">{errorTips}</p>
            </Form>
        </Modal>
    </>
    )
}
export default Dialog