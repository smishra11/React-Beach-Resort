import React from 'react';
import loadingGit from '../images/gif/loading-arrow.gif';

function Loading() {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGit} alt="" />
    </div>
  )
}

export default Loading;