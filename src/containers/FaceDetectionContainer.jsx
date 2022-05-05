import React, {useEffect} from "react";
import FaceIndex from "../components/Splicing/FaceIndex";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";

const FaceDetectionContainer = ({
                                        beginDetection,
                                        getDetectionDetail,
                                        result,
                                        textAreaValue,
                                        current,
                                        originalPath,
                                        flag,
                                        setClear,
                                        setDetectionId,
                                        detectionId
                                    }) => {
    useEffect(() => {
        setClear()
    }, [])
    return (<FaceIndex beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
                       textAreaValue={textAreaValue} current={current} originalPath={originalPath}
                       flag={flag}
                       setDetectionId={setDetectionId} detectionId={detectionId}/>)

}

const mapStateToProps = ({detection}) => ({
    result: detection.result,
    textAreaValue: detection.textAreaValue,
    current: detection.current,
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

export default connect(mapStateToProps, mapDispatchToProps)(FaceDetectionContainer);
