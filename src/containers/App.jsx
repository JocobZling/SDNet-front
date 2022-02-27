import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import CopyMoveDetection from './CopyMoveDetectionContainer'
import FaceDetectionContainer from './FaceDetectionContainer'
import FaceHistoryContainer from "./FaceHistoryContainer";
import CopyMoveHistoryContainer from "./CopyMoveHistoryContainer";
import UserPasswordContainer from "./UserPassword";
import UserProfileContainer from "./UserProfile";


const HomeContainer = () => {
    // if (!window.localStorage.getItem('jwt')) {
    //     window.location.href = '/#/login'
    // }
    return (<HomePage>
        <Switch>
            <Route path='/' exact component={WelcomeContainer}/>
            <Route path='/index' exact component={WelcomeContainer}/>
            <Route path='/faceDetection' exact component={FaceDetectionContainer}/>
            <Route path='/copyMoveDetection' exact component={CopyMoveDetection}/>
            <Route path='/faceHistory' exact component={FaceHistoryContainer}/>
            <Route path='/copyMoveHistory' exact component={CopyMoveHistoryContainer}/>
            <Route path='/profile' exact component={UserProfileContainer}/>
            <Route path='/password' exact component={UserPasswordContainer} />
            <Route path='*' exact component={WelcomeContainer}/>
        </Switch>
    </HomePage>)
}

export default HomeContainer;
