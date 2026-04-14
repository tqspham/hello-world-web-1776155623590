import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HelloWorldProps {
  className?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ className }) => {
  return (
    <div className={twMerge('flex items-center justify-center min-h-screen bg-white px-4 md:px-8', className)}>
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Hello World
        </h1>
      </div>
    </div>
  );
};

export default HelloWorld;