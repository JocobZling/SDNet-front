import React from "react";
import UploadImage from "./uploadImage";
import UploadZipFile from "./uploadZipFile"
import styled from "styled-components";
import {Input, Row, Col, Divider} from "antd";

const DetectContainer = styled('div')`
    display:flex;
    flex-direction:column;
    .pictureUpload{
        display:flex;
        flex-direction:row;
    }
`
const DetectPage = ({singleFaceImageDetection, faceZipDetection, detection, zipDetection}) => (
    <div>
        <Row gutter={[16, 16]}>
            <Col span={24} offset={3}>
                单张图片检测：
            </Col>
            <Col span={22} offset={3}>
                <UploadImage singleFaceImageDetection={singleFaceImageDetection}/>
            </Col>
            <Col span={10} offset={3}>
                结果：{detection}
            </Col>
        </Row>
        <Divider/>
        <Row gutter={[16, 16]}>
            <Col span={24} offset={3}>
                批量图片检测：
            </Col>
            <Col span={22} offset={3}>
                <UploadZipFile faceZipDetection={faceZipDetection} zipDetection={zipDetection}/>
            </Col>
        </Row>
    </div>


)

export default DetectPage

