import React from 'react';

interface ContextProps {
  children: React.ReactNode
}

const Content = ({ children }: ContextProps) => {
  return (
    <>
      
        {children}
      
    </>
  );
}

export default Content;