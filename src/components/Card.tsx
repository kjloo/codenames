import { FunctionComponent, useState } from 'react';

export enum Color {
    BLANK = 'blank',
    RED = 'red',
    BLUE = 'blue',
    BLACK = 'black',
    GREY = 'grey',
}

interface CardProps {
    url: string
    flipped: boolean
    color: Color
}

export const Card: FunctionComponent<CardProps> = ({ url, flipped, color }) => {

    const [mark, setMark] = useState(Color.BLANK);

    const handleClick = () => {
        setMark(color);
    };

    const cardMarkClass = (): string => {
        return mark !== Color.BLANK ? 'marked' : ''
    }

    const cardMarkStyle = (): React.CSSProperties => {
        return mark !== Color.BLANK ? { backgroundColor: mark } : {}
    }

    return <div className={`card ${cardMarkClass()}`} onClick={handleClick} style={cardMarkStyle()} >
        <img src={url} className={flipped ? 'flipped-image' : ''} alt="Image" />
    </div>;
}
