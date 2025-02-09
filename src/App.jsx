import './App.css'
import { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>
      <p>Today is the {time.toLocaleDateString()}</p>
      <p>and the Current Time is</p>
      <strong>{time.toLocaleTimeString()}</strong>
    </div>
  );
}
