import React from 'react';
import UploadImage from "./UploadImage";


const SplicingIndex = ({beginDetection, getDetectionDetail, result, textAreaValue, current, status}) => (
    <div>
        <UploadImage beginDetection={beginDetection}
                     getDetectionDetail={getDetectionDetail}
                     result={result}
                     textAreaValue={textAreaValue}
                     current={current}
                     status={status}

        />
    </div>
)

export default SplicingIndex
