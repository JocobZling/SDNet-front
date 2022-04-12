import React from "react";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";
import VideoDetectionIndex from "../components/Splicing/VideoDetectionIndex";

const VideoDetectionContainer = ({}) => (
    <VideoDetectionIndex />
)

const mapStateToProps = ({detection}) => ({});


const mapDispatchToProps = dispatch => ({
    beginDetection: (data) => dispatch(detectionActions.beginDetection(data)),
    getDetectionDetail: (data) => dispatch(detectionActions.getDetectionDetail(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetectionContainer);
