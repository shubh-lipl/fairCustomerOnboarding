import React from 'react';


function ProgressBar(props) {
    return(
        <>
        <div className="progress">
        <div className="bar" style={{width: props.progress + '%'}}></div>
      </div>
        </>
    )
  }

  export default ProgressBar