import React from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Createpage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from 'react-hot-toast'

function App() {
  return (
    <div data-theme="forest">
    {/* <button onClick={()=>toast.success("test message")}className="btn btn-outline btn-primary">clic</button> */}
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
         <Route path="/create" element ={<Createpage/>}/>
          <Route path="/note/:id" element ={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App