import React from "react";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";


const EncryptedImageAnalysisContainer = ({uploadAndSplitImage, images}) => (
    <div>123</div>
)

const mapStateToProps = ({detection}) => ({
    images: detection.images
});


const mapDispatchToProps = dispatch => ({
    uploadAndSplitImage: (data) => dispatch(detectionActions.uploadAndSplitImage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EncryptedImageAnalysisContainer);
