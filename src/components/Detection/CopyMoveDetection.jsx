import React from "react";
import CopyMoveUploadImage from "./CopyMoveUploadImage";
import styled from "styled-components";
import {Input, Row, Col, Divider, Button} from "antd";
import CopyMoveUploadZipFile from "./CopyMoveUploadZipFile";

const DetectContainer = styled('div')`
    display:flex;
    flex-direction:column;
    .pictureUpload{
        display:flex;
        flex-direction:row;
    }
`

const CopyMoveDetection = ({singleCopyMoveImageDetection, singleCopyMoveAndSourceDetection, detection, sourceDetection,copyMoveZipDetection,zipDetection}) => {
    const buttonOnClick = () => {
        singleCopyMoveAndSourceDetection();
    }
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} offset={3}>
                    单张图片检测：
                </Col>
                <Col span={22} offset={3}>
                    <CopyMoveUploadImage singleFaceImageDetection={singleCopyMoveImageDetection}/>
                </Col>
                <Col span={2} offset={3}>
                    检测结果：
                </Col>
                <Col offset={detection !== '' && sourceDetection === '' ? 3 : 0}>
                    <img src={detection}/>
                </Col>
                <Col offset={1}>
                    <img src={sourceDetection}/>
                </Col>
                <Col offset={2}>
                    {detection !== '' && sourceDetection === '' ? <Button onClick={buttonOnClick}>区分源和目标</Button> : ''}
                </Col>
                <Col span={22} offset={3}>
                </Col>
            </Row>
            <Divider/>
            <Row gutter={[16, 16]}>
                <Col span={24} offset={3}>
                    批量图片检测：
                </Col>
                <Col span={22} offset={3}>
                    <CopyMoveUploadZipFile copyMoveZipDetection={copyMoveZipDetection} zipDetection={zipDetection}/>
                </Col>
            </Row>
        </div>
    )
}

export default CopyMoveDetection

