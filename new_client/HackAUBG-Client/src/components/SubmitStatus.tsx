import React from 'react';

interface SubmitStatusProps {
  statusText: string;
}

const SubmitStatus: React.FC<SubmitStatusProps> = ({ statusText }) => {
  return <p className="text-sm text-green-500 mt-1">{statusText}</p>;
};

export default SubmitStatus;
