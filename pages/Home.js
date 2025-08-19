import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

function Home() {
  const [progress, setProgress] = useState(0);

  const handleSignal = () => {
    setProgress((prev) => Math.min(prev + 25, 100));
  };

  return (
    <div>
      <h2>Home Page</h2>
      <ProgressBar progress={progress} />
      <button onClick={handleSignal}>Send Signal</button>
    </div>
  );
}

export default Home;
