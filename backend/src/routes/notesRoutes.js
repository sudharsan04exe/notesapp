import express from "express"
import { createNote, deletenote, getAllNotes, updatenote,getANote } from "../controllers/notesController.js";
 
const router=express.Router();

router.get("/",getAllNotes)
router.get("/:id",getANote)
router.post("/",createNote)
router.put("/:id", updatenote)
router.delete("/:id",deletenote)

export default router;