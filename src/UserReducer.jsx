import { createSlice } from "@reduxjs/toolkit";
import CardList from "./CardList";


const userSlice = createSlice({
    name: "users",
    initialState: CardList,
    reducers: {
        addArticle: (state, action) => {
            state.push(action.payload)
        },
        updateArticle: (state, action) => {
            const {id, title, content} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                uu.title = title;
                uu.content = content;
            }
        },
        deleteArticle: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                return state.filter(f = f.id != id);
            }
        }
    }
})

export const {addArticle, updateArticle, deleteArticle} = userSlice.actions;
export default userSlice.reducer;