import express from "express";
import {addNotes, deleteNotes, getNotes, getbyidNotes, updateNotes} from "../Controller/Notes.js"

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.get("/notes/:id", getbyidNotes);
router.put("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);


export default router;