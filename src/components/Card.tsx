import { FunctionComponent } from 'react';

interface CardProps {
    url: string
}

const Card: FunctionComponent<CardProps> = ({ url }) => {

    return <div className='card'>
        <img src={url} alt="Image" />
    </div>;

}

export default Card;