import React from 'react';
import UploadImage from "./UploadImage";
import {Divider} from "antd";
import Detection from "./Detection";


const SplicingIndex = ({
                           beginDetection,
                           getDetectionDetail,
                           result,
                           textAreaValue,
                           current,
                           originalPath,
                           flag,
                           setDetectionId,
                           detectionId,
                           setClear
                       }) => (
    <div>
        <UploadImage setDetectionId={setDetectionId} setClear={setClear}/>
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的图片检测</Divider>
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

export default SplicingIndex
