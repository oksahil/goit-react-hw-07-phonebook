import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const phonesSlice = createSlice({
    name: "phones",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, {payload}) => {
                state.push(payload);
                    },
            prepare: data => {
                        return {
                            payload: {
                                id: nanoid(),
                                ...data,
                                    }
                                }
                            }
                    },
        deleteContact: (state, { payload }) => state.filter(({id}) => id !== payload),

            }
})

export const {addContact, deleteContact} = phonesSlice.actions;
export default phonesSlice.reducer;