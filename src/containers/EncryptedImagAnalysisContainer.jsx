import React from "react";
import {actions as analysisActions} from "../ducks/analysis";
import {connect} from "react-redux";
import MyAnalysis from "../components/Analysis/MyAnalysis";


const EncryptedImageAnalysisContainer = ({uploadAndGetHist, images}) => (
    <MyAnalysis uploadAndSplitImage={uploadAndGetHist} images={images}/>
)

const mapStateToProps = ({detection}) => ({
    images: detection.images
});

const mapDispatchToProps = dispatch => ({
    uploadAndGetHist: (data) => dispatch(analysisActions.uploadAndGetHist(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EncryptedImageAnalysisContainer);
