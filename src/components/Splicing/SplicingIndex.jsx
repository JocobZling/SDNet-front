import React from 'react';
import UploadImage from "./UploadImage";
import {Divider} from "antd";
import Detection from "./Detection";


const SplicingIndex = ({beginDetection, getDetectionDetail, result, textAreaValue, current, status, originalPath, flag}) => (
    <div>
        <UploadImage/>
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的肖像图片检测</Divider>
        <Detection beginDetection={beginDetection}
            // pictureOnePosition={pictureOnePosition}
            // pictureTwoPosition={pictureTwoPosition}
                   getDetectionDetail={getDetectionDetail} result={result} textAreaValue={textAreaValue}
                   current={current}
                   originalPath={originalPath}
                   flag={flag}
        />
    </div>
)

export default SplicingIndex
