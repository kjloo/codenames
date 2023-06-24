import { FunctionComponent } from 'react';

interface CardProps {
    url: string
    flipped: boolean
}

const Card: FunctionComponent<CardProps> = ({ url, flipped }) => {

    return <div className='card'>
        <img src={url} className={flipped ? 'flipped-image' : ''} alt="Image" />
    </div>;

}

export default Card;
