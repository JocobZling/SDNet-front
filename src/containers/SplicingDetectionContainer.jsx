import React from "react";
import SplicingIndex from "../components/Splicing/SplicingIndex";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";

const SplicingDetectionContainer = ({
                                        beginDetection, getDetectionDetail,
                                        result, textAreaValue, current, status, originalPath, flag
                                    }) => (
    <SplicingIndex beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
                   textAreaValue={textAreaValue} current={current} status={status} originalPath={originalPath}
                   flag={flag}/>

)

const mapStateToProps = ({detection}) => ({
    result: detection.result,
    textAreaValue: detection.textAreaValue,
    current: detection.current,
    status: detection.status,
    originalPath: detection.originalPath,
    flag: detection.flag
});


const mapDispatchToProps = dispatch => ({
    beginDetection: (data, type) => dispatch(detectionActions.beginDetection(data, type)),
    getDetectionDetail: (data, type) => dispatch(detectionActions.getDetectionDetail(data, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplicingDetectionContainer);
