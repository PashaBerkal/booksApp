import { createSlice } from "@reduxjs/toolkit";
import { Category, CategoryType, SelectedSortOption, SortOptions } from "../../models/IOptions";
import { INITIAL_SEARCH_STATE } from "../../constants/constants";

interface SearchFieldState {
    value: string;
    startIndex: number;
    selectedSortOption: SelectedSortOption;
    category: Category
}

const initialState: SearchFieldState = {
    value: INITIAL_SEARCH_STATE,
    startIndex: 0,
    selectedSortOption: SortOptions.relevance,
    category: CategoryType.all

}

export const FilterControlsSlice = createSlice({
    name: 'FilterControls',
    initialState,
    reducers: {
        setSearchFieldState(state, action) {
            state.value = ''
            state.value = action.payload
        },
        increaseStartIndex(state, action){
            state.startIndex= state.startIndex + action.payload
        },
        changeToInitialState(state){
            state.startIndex = 0;
        },
        setSortOptionsState(state, action){
            state.selectedSortOption = action.payload;
        },
        setCategoryState(state, action){
            state.category = action.payload;
        }

    }
})
export const { 
    setSearchFieldState, 
    increaseStartIndex,
    changeToInitialState, 
    setSortOptionsState,
    setCategoryState 
} = FilterControlsSlice.actions;

export default FilterControlsSlice.reducer;