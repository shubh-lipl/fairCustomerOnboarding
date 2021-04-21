import React from 'react';


function ProgressBar(props) {
    return(
        <>
        <div className="progress mb-4">
        <div className="bar" style={{width: props.progress + '%'}}></div>
      </div>
        </>
    )
  }

  export default ProgressBar