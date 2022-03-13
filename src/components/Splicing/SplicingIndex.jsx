import React from 'react';
import UploadImage from "./UploadImage";

const SplicingIndex = ({uploadAndSplitImage, images}) => (
    <div>
        <UploadImage uploadAndSplitImage={uploadAndSplitImage} images={images}/>
    </div>
)

export default SplicingIndex
