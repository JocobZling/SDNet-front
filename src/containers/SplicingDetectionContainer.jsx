import React from "react";
import SplicingIndex from "../components/Splicing/SplicingIndex";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";

const SplicingDetectionContainer = ({beginDetection, getDetectionDetail, result, textAreaValue, current, status}) => (
    <SplicingIndex beginDetection={beginDetection} getDetectionDetail={getDetectionDetail} result={result}
                   textAreaValue={textAreaValue} current={current} status={status}/>

)

const mapStateToProps = ({detection}) => ({
    result: detection.result,
    textAreaValue: detection.textAreaValue,
    current: detection.current,
    status: detection.status
});


const mapDispatchToProps = dispatch => ({
    beginDetection: (data) => dispatch(detectionActions.beginDetection(data)),
    getDetectionDetail: (data) => dispatch(detectionActions.getDetectionDetail(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplicingDetectionContainer);
