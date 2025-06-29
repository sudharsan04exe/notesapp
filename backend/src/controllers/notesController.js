
import Note from "../models/Note.js"

export async function getAllNotes(req,res) {
    try{
         const notes=await Note.find().sort({createdAt:-1})   //older first  
        res.status(200).json(notes)
    }catch(error){
        console.error(error.message)
        res.status(500).send("error while fetch")
    } 
}
export async function getANote(req,res) {
    try{
        const note=await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note)
    }catch(error){
        console.error(error.message)
        res.status(500).send("error while fetch")
    } 
}
export async function createNote(req,res) {
    try{
        const {title,content}=req.body
        const newNote=new Note({title,content})
        const savednote=await newNote.save();
        res.status(201).json(savednote)
    }catch(error){
        console.error(error.message)
        res.status(500).send("error while creating note")
        
    }
}
export async function updatenote(req, res) {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, content: req.body.content },
      { new: true } // Return updated document
    );
    
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error while updating note");
  }
}


export async function deletenote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error while deleting note");
  }
}
