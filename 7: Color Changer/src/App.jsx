import { useState } from 'react'
import React from 'react'

function App() {
  const [color, setColor] = useState("black")


  return (
    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-6 shadow-lg bg-transparent px-6 py-4 rounded-s-3xl'>

          {/* <button onClick={()=> setColor("orange")} style={{background:"orange"}}>Orange</button> */}
          {/* <button onClick={()=> setColor("orange")} variant="contained" style={{background:"orange"}}>Orange</button> */}
          <button onClick={() => setColor("orange")} style={{ background: "orange" }}>Orange</button>
          <button onClick={() => setColor("blue")} style={{ background: "blue" }}>Blue</button>
          {/* <button onClick={()=> setColor("grey")} style={{background:"grey"}}>Grey</button> */}
          <button onClick={() => setColor("red")} style={{ background: "red" }}>Red</button>
          <button onClick={() => setColor("aqua")} style={{ background: "aqua" }}>Aqua</button>
          <button onClick={() => setColor("pink")} style={{ background: "pink" }}>Pink</button>
          <button onClick={() => setColor("green")} style={{ background: "green" }}>Green</button>
        </div>

      </div>







    </div>
  )
}

export default App
