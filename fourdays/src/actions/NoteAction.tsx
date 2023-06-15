import { Note } from "../models/Note";
import { NoteType } from "../types/NoteType";

export interface NoteAction {
    type: NoteType,
    payload: Note
}