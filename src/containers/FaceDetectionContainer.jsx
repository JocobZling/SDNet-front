import React from "react";
import DetectPage from "../components/Detection/DetectPage";
import {actions as detectionAction} from "../ducks/detection";
import {connect} from "react-redux";

const FaceDetectionContainer = ({singleFaceImageDetection, faceZipDetection, detection, zipDetection}) => (
    <DetectPage singleFaceImageDetection={singleFaceImageDetection} faceZipDetection={faceZipDetection}
                detection={detection} zipDetection={zipDetection}/>
)

const mapStateToProps = ({detection}) => ({
    detection: detection.detection.msg,
    zipDetection: detection.zipDetection.data
});

const mapDispatchToProps = dispatch => ({
    singleFaceImageDetection: (data) => dispatch(detectionAction.singleFaceImageDetection(data)),
    faceZipDetection: (data) => dispatch(detectionAction.faceZipDetection(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(FaceDetectionContainer);
