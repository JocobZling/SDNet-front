import React from 'react';
import {Button, Row, Steps, Col, Popover} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined} from '@ant-design/icons';

const {Step} = Steps;

const Detection = ({pictureOnePosition, pictureTwoPosition}) => {
    const customDot = (dot, {status, index}) => (
        <Popover
            content={
                <span>
        step {index} status: {status}
      </span>
            }
        >
            {dot}
        </Popover>
    );
    return (
        <div>
            <Button icon={<SearchOutlined/>}>开始检测</Button>
            <Row>
                <Col span={24}>
                    <Steps current={1} progressDot={customDot}>
                        <Step title="Finished"/>
                        <Step title="In Progress"/>
                        <Step title="Waiting"/>
                        <Step title="Waiting"/>
                    </Steps>,
                </Col>

            </Row>
        </div>
    )
}


export default Detection
