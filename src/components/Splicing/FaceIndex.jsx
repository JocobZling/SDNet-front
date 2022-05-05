import React from 'react';
import UploadImage from "./UploadImage";
import {Divider} from "antd";
import Detection from "./Detection";


const FaceIndex = ({
                           beginDetection,
                           getDetectionDetail,
                           result,
                           textAreaValue,
                           current,
                           originalPath,
                           flag,
                           setDetectionId,
                           detectionId
                       }) => (
    <div>
        <UploadImage setDetectionId={setDetectionId}/>
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的肖像图片检测</Divider>
        <Detection beginDetection={beginDetection}
                   getDetectionDetail={getDetectionDetail} result={result} textAreaValue={textAreaValue}
                   current={current}
                   originalPath={originalPath}
                   flag={flag}
                   type={"image"}
                   detectionId={detectionId}
        />
    </div>
)

export default FaceIndex