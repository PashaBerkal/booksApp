import {FC} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IBook } from '../../models/IBook';
import Card from '../Card/Card';
import classes from './Cards.module.scss';

interface CardsProps {
    items: IBook[];
    totalItemCount: number;
}

const Cards: FC<CardsProps> = ({items, totalItemCount}) => {
    return (
        <div>
            <div className={classes.totalCount}>
                Total books: {totalItemCount}
            </div>
            <div className={classes.Cards}>
                {items.map((item) => (
                    <Card
                        key={uuidv4()}
                        authors={item.volumeInfo.authors} 
                        categories={item.volumeInfo.categories}
                        img={item.volumeInfo.imageLinks}
                        id={item.id}
                        title={item.volumeInfo.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;