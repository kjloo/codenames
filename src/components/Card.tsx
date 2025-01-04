import { FunctionComponent, useEffect, useState } from 'react';

export type Role = 'Red' | 'Blue' | 'Death' | 'Neutral';

export enum Color {
    BLANK = 'blank',
    RED = 'red',
    BLUE = 'blue',
    BLACK = 'black',
    GREY = 'grey',
}

interface CardProps {
    url: string
    role: Role | null
    flipped?: boolean
}

export const Card: FunctionComponent<CardProps> = ({ url, role, flipped = false }) => {

    const [color, setColor] = useState(Color.BLANK);

    useEffect(() => {
        setColor(getColorByRole(role));
    }, [role]);

    const getColorByRole = (role: Role | null): Color => {
        switch (role) {
            case "Red":
                return Color.RED;
            case "Blue":
                return Color.BLUE;
            case "Neutral":
                return Color.GREY;
            case "Death":
                return Color.BLACK;
            default:
                return Color.BLANK;
        }
    };

    const cardMarkClass = (): string => {
        return role ? 'marked' : ''
    }

    const cardMarkStyle = (): React.CSSProperties => {
        return role ? { backgroundColor: color } : {}
    }

    return <div className={`card ${cardMarkClass()}`} style={cardMarkStyle()} >
        <img src={url} className={flipped ? 'flipped-image' : ''} alt="Image" />
    </div>;
}
