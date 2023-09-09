import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageLinks } from '../../models/IBook';
import classes from './Card.module.scss';

interface PropsCard {
    categories?: string[],
    id: string,
    authors: string[],
    title: string,
    img?: ImageLinks

}

const Card: FC<PropsCard> = ({authors, categories, img, id, title}) => {
    let imgSrc = img?.smallThumbnail;
    const navigate = useNavigate()

    const navigateToDetails = () => {
        navigate(`/BookPage/:${id}`)
    }
    return (
        <div  onClick={navigateToDetails} className={classes.Card}>
            <div className={classes.img}>
                {imgSrc && <img src={imgSrc} alt="Book" />}
            </div>
            <div>
                {categories && categories[0] }
            </div>
            <div>
                {title}
            </div>
            <div>
                {authors && authors[0]}
            </div>
        </div>
    );
};

export default Card;