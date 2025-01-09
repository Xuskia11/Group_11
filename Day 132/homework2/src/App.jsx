import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100px",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "lightGrey",
      borderRadius: "10px"
    }}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </main>
    
  );
}

export default App
