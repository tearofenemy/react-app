import React from "react";

const char = props => {
    const styles = {
        display: 'inline-block',
        border: '1px solid black',
        margin: '16px',
        padding: '16px',
        textAlign: 'center'
    };

    return(
        <div style={styles} onClick={props.click}>
            {props.character}
        </div>
    );
};

export default char;