import Select from '../common/Select/Select';
import SearchField from '../common/SearchField/SearchField';
import {useState, KeyboardEvent, FC } from 'react';
import { CategoryType, SortOptions } from '../../models/IOptions';
import classes from './FilterControls.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeToInitialState, setCategoryState, setSearchFieldState, setSortOptionsState } from "../../store/reducers/FilterControlsSlice";
import { resetBooks } from '../../store/reducers/BookSlice';
import { INITIAL_SEARCH_STATE } from '../../constants/constants';
import { Button } from '@material-ui/core';

const categories = [
    CategoryType.all,
    CategoryType.art,
    CategoryType.biography,
    CategoryType.computers,
    CategoryType.history,
    CategoryType.medical,
    CategoryType.poetry,
]

const sortOptions = [
    SortOptions.relevance,
    SortOptions.newest,
]

type FilterControlsProps = {
    refetch: () => {}
}

const FilterControls: FC<FilterControlsProps> = ({ refetch }) => {
    const { selectedSortOption, category, value } = useAppSelector(state => state.filterControlsReducer)
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>(INITIAL_SEARCH_STATE)
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const searchBooks = () => {
        dispatch(resetBooks());
        dispatch(changeToInitialState())
        dispatch(setSearchFieldState(search))
        if(value === search) {
            refetch()
        }
    }
    const onKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
        if(event.key === "Enter"){
            event.preventDefault();
            searchBooks();
        }
    }
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'category':
                dispatch(resetBooks())
                dispatch(setCategoryState(event.target.value))
                dispatch(changeToInitialState())
                break;
            case 'sortOption':
                dispatch(resetBooks())
                dispatch(setSortOptionsState(event.target.value))
                dispatch(changeToInitialState())
                break;
            default:
                break;
        }
    };

    return (
        <div className={classes.FilterControls}>
            <div className={classes.filterControlsContainer}>
                <SearchField
                    onKeyDown={onKeyDown}
                    onChange={handleSearchChange}
                    value={search}

                />
                <Select 
                    value={category}
                    options={categories} 
                    helperText='Category'
                    name='category'
                    onChange={handleSelectChange}
                />
                <Select
                    value={selectedSortOption}
                    options={sortOptions} 
                    helperText='Sorting by'
                    name='sortOption'
                    onChange={handleSelectChange}
                />
                <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={searchBooks}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default FilterControls;