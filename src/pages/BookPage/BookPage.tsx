import {useNavigate, useParams } from 'react-router-dom';
import classes from './BookPage.module.scss'
import { bookAPI } from '../../services/BookService';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { resetBooks } from '../../store/reducers/BookSlice';
import Container from '../../hoc/Container/Container';

const BookPage = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams()
    const {data, isError, isLoading} = bookAPI.useFetchtSpecificBookQuery({id})
    const imgSrc = data?.volumeInfo?.imageLinks?.smallThumbnail;
    const navigate = useNavigate();
    const clickHandler = () => navigate(-1);

    useEffect(() => {
        dispatch(resetBooks())
    }, [])

    return (
        <Container>
            <div>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={clickHandler}
                >
                    Back
                </Button>
                {isError && <div>Error</div>}
                {isLoading && <div>Loading...</div>}
                {data?.volumeInfo && 
                    <div className={classes.BookPage}>
                        <div className={classes.img}>
                            {imgSrc && <img src={imgSrc} alt="Book" />}
                        </div>
                        <div className={classes.info}>
                            <h1>{data.volumeInfo.title && data.volumeInfo.title}</h1>
                            <div className={classes.categories}>
                                {data.volumeInfo.categories}
                            </div>
                            <div className={classes.authors}>
                                {data.volumeInfo.authors}
                            </div>
                            <div className={classes.description}>
                                {data.volumeInfo.description}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Container>
    );
};

export default BookPage;