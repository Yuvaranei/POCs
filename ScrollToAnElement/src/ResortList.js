import React from 'react';

const ResortList = React.forwardRef((props,ref) => {
    return (
        <div ref={ref} style={{"height" : "400px","width" : "300px","border" : "1px solid","fontSize" : "30px"}}>
            Resort Number {props.resortNum} 
        </div>
    )
});

export default ResortList;