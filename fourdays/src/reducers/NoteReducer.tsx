import { NoteAction } from "../actions/NoteAction";
import { Note } from "../models/Note";
import { NoteType } from "../types/NoteType";

export const NoteReducer = ( state: Note[] = [], action: NoteAction ) => {

    switch(action.type) {
        case NoteType.NOTE_SAVE:
            return [...state, action.payload]
        case NoteType.NOTE_LIST:
            return state
        case NoteType.NOTE_DELETE:
            const index = state.findIndex( item => item.id === action.payload.id )
            const arr = [...state]
            arr.splice(index, 1)
            return arr
        case NoteType.NOTE_UPDATE:
            const updateIndex = state.findIndex( item => item.id === action.payload.id )
            const arrUpdate = [...state]
            if ( updateIndex > -1 ) {
                arrUpdate[updateIndex] = action.payload
            }
            return arrUpdate
        default:
            return state
    }


}