import React from "react";
import CopyMoveDetection from "../components/Detection/CopyMoveDetection";
import {actions as detectionAction} from "../ducks/detection";
import {connect} from "react-redux";

const CopyMoveDetectionContainer = ({singleCopyMoveImageDetection, detection, singleCopyMoveAndSourceDetection, sourceDetection, copyMoveZipDetection, zipDetection}) => (
    <CopyMoveDetection
        singleCopyMoveImageDetection={singleCopyMoveImageDetection}
        singleCopyMoveAndSourceDetection={singleCopyMoveAndSourceDetection}
        detection={detection}
        sourceDetection={sourceDetection}
        copyMoveZipDetection={copyMoveZipDetection}
        zipDetection={zipDetection}
    />
)

const mapStateToProps = ({detection}) => ({
    detection: detection.copyMoveDetection.msg,
    sourceDetection: detection.copyMoveSourceDetection.msg,
    zipDetection: detection.zipDetection.data
});

const mapDispatchToProps = dispatch => ({
    singleCopyMoveImageDetection: (data) => dispatch(detectionAction.singleCopyMoveImageDetection(data)),
    singleCopyMoveAndSourceDetection: () => dispatch(detectionAction.singleCopyMoveAndSourceDetection()),
    copyMoveZipDetection: (data) => dispatch(detectionAction.copyMoveZipDetection(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(CopyMoveDetectionContainer);
