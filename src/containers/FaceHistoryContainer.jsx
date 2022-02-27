import React from "react";
import FaceHistory from "../components/FaceHistory";
import {actions as historyAction} from "../ducks/history";
import {connect} from "react-redux";

const FaceHistoryContainer = ({getFaceHistory, faceHistory}) => (
    <FaceHistory faceHistory={faceHistory} getFaceHistory={getFaceHistory}/>
)
const mapStateToProps = ({history}) => ({
    faceHistory: history.faceHistory
});

const mapDispatchToProps = dispatch => ({
    getFaceHistory: (data) => dispatch(historyAction.getFaceHistory(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FaceHistoryContainer);
