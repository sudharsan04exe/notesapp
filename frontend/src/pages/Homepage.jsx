import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import api from "../lib/axios.js"


import Navbar from '../components/Navbar.jsx'
import Notecard from '../components/Notecard.jsx'
const Homepage=()=> {
  const [notes,setNotes]=useState([])
  const [loading,setloading]=useState(true)


  useEffect(()=>{
    const fetchNotes=async()=>{
      try{
        const res=await api.get("/notes");
        setNotes(res.data);
        setloading(false)
        console.log(res.data);
      }catch(error){
          console.log("error fetching notes")
          setloading(false)
      }
    }
    fetchNotes();
  },[])
  return (
   <>
   <div className="min-h-screen ">
    <Navbar/>
   
    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>loading notes...</div>}
      
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {notes.map(note=>(
          <Notecard key={note._id} note={note} setNotes={setNotes}></Notecard>
        ))}
       </div>
    </div>
   </div>
   </>
  )
}

export default Homepage