import './App.css';
import {useState} from 'react';
import Box from './Box';
function App() {
  let [Boxes,]=useState(()=>(Array.from({length:20})).map((_,i)=>(<Box key={i}/>)));
  return (
    <div className="App" style={{display:'flex',flexWrap:"wrap"}}>
      {Boxes}
    </div>
  );
}

export default App;
