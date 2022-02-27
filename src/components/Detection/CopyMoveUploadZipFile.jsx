import React from 'react'
import {Upload, message, Button, Input, Row, Col} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}


class CopyMoveUploadZipFile extends React.Component {
    state = {
        zipFile: '',
        name: '',
    };

    handleCustomRequest = () => {
        this.props.copyMoveZipDetection({
            zipFile: this.state.zipFile
        })
    }
    handleBeforeUpload = info => {
        if (info.type !== 'application/x-zip-compressed') {
            message.error(`${info.name}文件 不是zip文件`);
            return false;
        }
        getBase64(info, zipFile => {
            this.setState({
                zipFile: zipFile,
                name: info.name
            })
        })
        return false;
    }

    render() {
        const {zipFile, name} = this.state;
        const {zipDetection} = this.props;
        return (
            <Row gutter={[16, 16]}>
                <Col span={4}>
                    <Upload
                        showUploadList={false}
                        maxCount={1}
                        onChange={this.handleChange}
                        beforeUpload={this.handleBeforeUpload}
                    >
                        <Button icon={<UploadOutlined/>}>选择图片zip文件</Button>
                    </Upload>
                </Col>
                <Col span={12}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>{zipFile ? name : ''}</div>
                        <Button onClick={this.handleCustomRequest}>批量检测</Button>
                    </div>
                </Col>
                <Col span={20}>{zipDetection}</Col>
            </Row>
        );
    }
}


export default CopyMoveUploadZipFile;
