
import { useState } from 'react';
import './Header.css';
function Header(){

  const [color, setColor] = useState("olive")
  return(
    <>
      <div className='container' style={{backgroundColor:color}}>
          <div className='btns'>
            <button style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
      </div>
    </>
  )
}
export default Header;

