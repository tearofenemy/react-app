import React from "react";

const validation = props => {
    let validationMessage = 'Text too short';

    if(props.userLength >= 5) {
        validationMessage = 'Text too long enough';
    }

    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation;