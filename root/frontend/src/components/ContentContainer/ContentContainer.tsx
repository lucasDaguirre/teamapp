import React, {ReactNode} from 'react';
import './ContentContainer.scss';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  
  return (
    <div className="content-container">

    
    {/* PROPS PASSTHROUGH */}
      {children}
    </div>
    )
};

export default ContentContainer;