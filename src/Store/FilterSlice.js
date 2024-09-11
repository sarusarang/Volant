import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    Search: "",
    Filter: {}

}


const FilterSlice = createSlice({



    name: "Filter",
    initialState: initialState,


    reducers: {


        SetFilterData: (state, action) => {

            state.Filter = action.payload 
            
        },

        SetSearchData: (State, action) => {

            State.Search = action.payload


        }

    }

})




export const { SetFilterData,SetSearchData} = FilterSlice.actions
export default FilterSlice.reducer