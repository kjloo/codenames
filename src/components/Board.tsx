import { useState, FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import { Card, Color } from './Card';

interface BoardProps {

}

const Board: FunctionComponent<BoardProps> = () => {
    const B_KEY = 66;
    const C_KEY = 67;
    const F_KEY = 70;
    const G_KEY = 71;
    const K_KEY = 75;
    const R_KEY = 82;
    const [cards, setCards] = useState<string[]>([])
    const [flipImage, setFlipImage] = useState(false);
    const [marker, setMarker] = useState(Color.BLANK);

    const getCards = () => {
        axios.get("/api/board")
            .then(res => {
                const cards: string[] = res.data.board;
                setCards(cards);
            });
    }

    const handleKeyDown = (event: any) => {
        if (event.keyCode === B_KEY) {
            setMarker(Color.BLUE); // Set marker to blue
        }
        if (event.keyCode === C_KEY) {
            setMarker(Color.BLANK); // Clear marker
        }
        if (event.keyCode === F_KEY) {
            setFlipImage(flipImage => !flipImage); // Toggle the flipImage flag
        }
        if (event.keyCode === G_KEY) {
            setMarker(Color.GREY); // Set marker to grey
        }
        if (event.keyCode === K_KEY) {
            setMarker(Color.BLACK); // Set marker to black
        }
        if (event.keyCode === R_KEY) {
            setMarker(Color.RED); // Set marker to red
        }
    };

    const markerStyle = (): React.CSSProperties => {
        return marker !== Color.BLANK ? { backgroundColor: marker } : {}
    }

    useEffect(() => {
        getCards();
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return <div className='board'>
        <div id='marker' style={markerStyle()}></div>
        {cards.map(card => <Card key={card} url={card} flipped={flipImage} color={marker} />)}
    </div>;

}

export default Board;