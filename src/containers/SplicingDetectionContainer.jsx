import React from "react";
import SplicingIndex from "../components/splicing/SplicingIndex";
import {actions as detectionActions} from "../ducks/detection";
import {connect} from "react-redux";


const SplicingDetectionContainer = ({uploadAndSplitImage, images}) => (
    <SplicingIndex uploadAndSplitImage={uploadAndSplitImage} images={images}/>
)

const mapStateToProps = ({detection}) => ({
    images: detection.images
});


const mapDispatchToProps = dispatch => ({
    uploadAndSplitImage: (data) => dispatch(detectionActions.uploadAndSplitImage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplicingDetectionContainer);
