import React, {useEffect} from "react";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";
import VideoDetectionIndex from "../components/Splicing/VideoDetectionIndex";
import SplicingIndex from "../components/Splicing/SplicingIndex";

const VideoDetectionContainer = ({
                                     beginDetection,
                                     getDetectionDetail,
                                     result,
                                     textAreaValue,
                                     current,
                                     status,
                                     originalPath,
                                     flag,
                                     setClear,
                                     setDetectionId,
                                     detectionId
                                 }) => {
    useEffect(() => {
        setClear()
    }, [])
    return (<VideoDetectionIndex beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
                                 textAreaValue={textAreaValue} current={current} status={status}
                                 originalPath={originalPath}
                                 flag={flag}
                                 setDetectionId={setDetectionId} detectionId={detectionId}
    />)
}

const mapStateToProps = ({detection}) => ({
    result: detection.result,
    textAreaValue: detection.textAreaValue,
    current: detection.current,
    status: detection.status,
    originalPath: detection.originalPath,
    flag: detection.flag,
    detectionId: detection.detectionId
});


const mapDispatchToProps = dispatch => ({
    beginDetection: (data, type) => dispatch(detectionActions.beginDetection(data, type)),
    getDetectionDetail: (data, type) => dispatch(detectionActions.getDetectionDetail(data, type)),
    setClear: () => dispatch(detectionActions.setClear()),
    setDetectionId: (data) => dispatch(detectionActions.setDetectionId(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetectionContainer);
