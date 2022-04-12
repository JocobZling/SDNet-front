import React from 'react';
import {Divider} from "antd";
import Detection from "./Detection";
import VideoUpload from "./VideoUpload";


const VideoDetectionIndex = () => (
    <div>
        <VideoUpload/>
        <Divider orientation="left" style={{fontWeight: 700}}>支持隐私保护的视频检测</Divider>
        {/*<Detection/>*/}
    </div>
)

export default VideoDetectionIndex
