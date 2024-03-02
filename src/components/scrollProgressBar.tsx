import React, { useEffect, useState } from 'react';

interface ChildProps {
    scrollProgress: number;
  }
  

const ScrollProgressBar: React.FC<ChildProps> = ({scrollProgress}) => {

    return (
        <div className="progress-bar" style={{ height: `${scrollProgress}%` }}></div>
    );
};

export default ScrollProgressBar;