import React from 'react';
import UploadImage from "./UploadImage";


const SplicingIndex = ({beginDetection, getDetectionDetail, result, textAreaValue, current, status, originalPath, flag}) => (
    <div>
        <UploadImage beginDetection={beginDetection}
                     getDetectionDetail={getDetectionDetail}
                     result={result}
                     textAreaValue={textAreaValue}
                     current={current}
                     status={status}
                     originalPath={originalPath}
                     flag={flag}

        />
    </div>
)

export default SplicingIndex
