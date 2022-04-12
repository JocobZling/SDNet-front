import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import UserPasswordContainer from "./UserPassword";
import UserProfileContainer from "./UserProfile";
import MyLoginContainer from "./MyLoginContainer";
import SplicingDetectionContainer from "./SplicingDetectionContainer";
import EncryptedImagAnalysisContainer from "./EncryptedImagAnalysisContainer";
import FaceHistoryContainer from "./FaceHistoryContainer";
import VideoDetectionContainer from "./VideoDetectionContainer";


const HomeContainer = () => {
    if (!window.localStorage.getItem('jwt')) {
        window.location.href = '/#/login'
    }

    return (
        <HomePage>
            <Switch>
                <Route path='/' exact component={WelcomeContainer}/>
                <Route path='/index' exact component={WelcomeContainer}/>
                <Route path='/profile' exact component={UserProfileContainer}/>
                <Route path='/password' exact component={UserPasswordContainer}/>
                <Route path='/login' exact component={MyLoginContainer}/>
                <Route path='/splicingDetection' exact component={SplicingDetectionContainer}/>
                <Route path='/videoDetection' exact component={VideoDetectionContainer}/>
                <Route path='/encryptedImagAnalysis' exact component={EncryptedImagAnalysisContainer}/>
                <Route path='/faceHistory' exact component={FaceHistoryContainer}/>
            </Switch>
        </HomePage>)
}

export default HomeContainer;
