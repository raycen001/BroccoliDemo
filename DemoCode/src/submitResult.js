import React from 'react';
import "./index.css";
import { Result, Button, Modal } from 'antd';

const DisplayResult = ({
    isModalVisible,
    onCancel
}) => {
    const handleOk = () => {
        onCancel(this);
    };
    
    return (
    <>
        <Modal  onOk={handleOk} 
                onCancel={onCancel} 
                footer={null}
                visible={isModalVisible}
                closable = {false}
                destroyOnClose={true}>
            <Result
                status="success"
                title="All done!"
                subTitle="You will be one of the first to experience Broccoli & Co. When we launch."
                extra={[
                <Button type="primary" key="console" onClick={handleOk}>
                    OK
                </Button>
                ]}
            />
        </Modal>
    </>
    )
}
export default DisplayResult