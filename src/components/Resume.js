
import React from "react";
import resume from '../materials/Mohamed Mohamed 2022 Resume.pdf';

 function Resume() {
    return (
        <div>
            <iframe src={resume} height="800" width="800"></iframe>
        </div>
    )
}

export default Resume
