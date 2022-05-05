import React from 'react';
import UploadImage from "./UploadImage";
import {Divider} from "antd";
import SplicingDetection from "./SplicingDetection";


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
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的拼接检测</Divider>
        <SplicingDetection beginDetection={beginDetection}
                           getDetectionDetail={getDetectionDetail} result={result} textAreaValue={textAreaValue}
                           current={current}
                           originalPath={originalPath}
                           flag={flag}
                           type={"splicing"}
                           detectionId={detectionId}
        />
    </div>
)

export default FaceIndex
