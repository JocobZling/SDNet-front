import React from 'react';
import MyAnalysis from "./MyAnalysis";

const AnalysisIndex = ({uploadAndSplitImage, images}) => (
<div>
    <MyAnalysis uploadAndSplitImage={uploadAndSplitImage} images={images}/>
</div>
)

export default AnalysisIndex
