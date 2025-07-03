import express from "express";

import { getNote } from "../controllers/notes.controllers.js";
import { postNote } from "../controllers/notes.controllers.js";
import { deleteNote } from "../controllers/notes.controllers.js";
import { updateNote } from "../controllers/notes.controllers.js";

const router = express.Router();

router.get('/', getNote);
router.post('/', postNote);
router.delete('/:id', deleteNote);
router.put('/:id', updateNote);

export default router;