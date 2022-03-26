import React from "react";
import FaceHistory from "../components/History/FaceHistory";
import {actions as historyActions} from "../ducks/history";
import {connect} from "react-redux";

const FaceHistoryContainer = ({getFaceHistory, faceHistory}) => {
    return (
        <FaceHistory faceHistory={faceHistory} getFaceHistory={getFaceHistory}/>
    )
}

const mapStateToProps = ({history}) => ({
    faceHistory: history.faceHistory
});


const mapDispatchToProps = dispatch => ({
    getFaceHistory: (page, userId) => dispatch(historyActions.getFaceHistory(page, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FaceHistoryContainer);
