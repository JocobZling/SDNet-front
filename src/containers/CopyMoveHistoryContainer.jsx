import React from "react";
import CopyMoveHistory from "../components/CopyMoveHistory";
import {actions as historyAction} from "../ducks/history";
import {connect} from "react-redux";

const CopyMoveHistoryContainer = ({getCopyMoveHistory, copyMoveHistory}) => (
    <CopyMoveHistory copyMoveHistory={copyMoveHistory} getCopyMoveHistory={getCopyMoveHistory}/>
)
const mapStateToProps = ({history}) => ({
    copyMoveHistory: history.copyMoveHistory
});

const mapDispatchToProps = dispatch => ({
    getCopyMoveHistory: (data) => dispatch(historyAction.getCopyMoveHistory(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CopyMoveHistoryContainer);
