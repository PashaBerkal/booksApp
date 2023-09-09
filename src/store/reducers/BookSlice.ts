import { IBook } from "../../models/IBook"
import { createSlice } from "@reduxjs/toolkit";

interface BookState {
    books: IBook[],
    totalCount: number
}

const initialState: BookState = {
    books: [],
    totalCount: 0
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBooks(state, action) {
            state.books = [...state.books, ...action.payload]
        },
        resetBooks(state) {
            state.books = []
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload
        }
    }
})

export const { setTotalCount, addBooks, resetBooks} = bookSlice.actions

export default bookSlice.reducer;