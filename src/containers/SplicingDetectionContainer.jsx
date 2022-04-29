import React, {useEffect} from "react";
import SplicingIndex from "../components/Splicing/SplicingIndex";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";

const SplicingDetectionContainer = ({
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
    return (<SplicingIndex beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
                           textAreaValue={textAreaValue} current={current} originalPath={originalPath}
                           flag={flag}
                           setDetectionId={setDetectionId} detectionId={detectionId} setClear={setClear}/>)

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

export default connect(mapStateToProps, mapDispatchToProps)(SplicingDetectionContainer);
