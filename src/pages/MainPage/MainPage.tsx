import FilterControls from '../../components/FilterControls/FilterControls';
import { bookAPI } from '../../services/BookService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Cards from '../../components/Cards/Cards';
import { addBooks, setTotalCount } from '../../store/reducers/BookSlice';
import { useEffect } from 'react';
import { increaseStartIndex } from '../../store/reducers/FilterControlsSlice';
import classes from './MainPage.module.scss';
import Container from '../../hoc/Container/Container';
import { Button } from '@material-ui/core';


const MainPage = () => {
    const {books, totalCount} = useAppSelector(state => state.bookReducer)
    const dispatch = useAppDispatch();
    const {value, startIndex, selectedSortOption, category} = useAppSelector((state) => state.filterControlsReducer)
    const { data, isError, isFetching, refetch } = bookAPI.useFetchDefaultBooksQuery({
        title: value,
        startIndex, 
        selectedSortOption,
        category
    })
    const clickHandler = () => {
        dispatch(increaseStartIndex(4))
    }

    useEffect(() => {
        dispatch(addBooks(data?.items || []));
        dispatch(setTotalCount(data?.totalItems || 0))
    }, [data?.items, data?.totalItems, dispatch])

    return (
        <div>
            <Container>
                <h1>Search for books</h1>
            </Container>
                <FilterControls refetch={refetch} />
            <Container>
                {isError && <div className={classes.info}>error</div>}
                <Cards
                    items={books} 
                    totalItemCount={totalCount}
                />
                {isFetching && <div className={classes.info}>Loading...</div>}
                {(books.length < totalCount && !isFetching) && 
                    <Button color="secondary" variant="contained" onClick={clickHandler}>Load more</Button>
                }
            </Container>
        </div>
    );
};

export default MainPage;