import React from 'react';
import {Divider} from "antd";
import Detection from "./Detection";
import VideoUpload from "./VideoUpload";


const VideoDetectionIndex = ({
                                 beginDetection,
                                 getDetectionDetail,
                                 result,
                                 textAreaValue,
                                 current,
                                 status,
                                 originalPath,
                                 flag,
                                 setDetectionId,
                                 detectionId
                             }) => (
    <div>
        <VideoUpload setDetectionId={setDetectionId}/>
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的视频检测</Divider>
        <Detection
            beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
            textAreaValue={textAreaValue}
            current={current}
            originalPath={originalPath}
            flag={flag}
            type={"video"}
            detectionId={detectionId}
        />
    </div>
)

export default VideoDetectionIndex
