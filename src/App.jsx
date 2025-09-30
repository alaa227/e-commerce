import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className="p-5">
      <Button isPrimary>زرار أساسي</Button>
      <Button>زرار عادي</Button>
    </div>
    </>
  );
}

export default App
