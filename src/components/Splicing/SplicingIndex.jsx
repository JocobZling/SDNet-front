import React from 'react';
import UploadImage from "./UploadImage";


const SplicingIndex = ({beginDetection, getDetectionDetail, result, textAreaValue}) => (
    <div>
        <UploadImage beginDetection={beginDetection}
                     getDetectionDetail={getDetectionDetail}
                     result={result}
                     textAreaValue={textAreaValue}/>
    </div>
)

export default SplicingIndex
