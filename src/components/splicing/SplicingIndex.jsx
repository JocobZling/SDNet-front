import React from 'react';
import {Divider, Button} from 'antd';
import UploadImage from "./UploadImage";
import {SearchOutlined} from '@ant-design/icons';
import Detection from "./Detection";

const SplicingIndex = ({uploadAndSplitImage, images}) => (
    <div>
        <UploadImage uploadAndSplitImage={uploadAndSplitImage} images={images}/>
    </div>
)

export default SplicingIndex
