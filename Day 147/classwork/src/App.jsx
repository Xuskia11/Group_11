import { useState } from "react"

function App() {
  const [back, setBack] = useState(false);
    const handleClick = () => {
      setBack((prev) => !prev)
  }

  return (
    <div  style={{backgroundColor: back ? "black" : "white",height: "100vh",width: "100%"}} >
      <button onClick={handleClick}>Click</button>  
    </div>
  )
}

export default App
