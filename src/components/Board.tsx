import { useState, FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

interface BoardProps {

}

const Board: FunctionComponent<BoardProps> = () => {
    const F_KEY = 70;
    const [cards, setCards] = useState<string[]>([])
    const [flipImage, setFlipImage] = useState(false);
    const getCards = () => {
        axios.get("/api/board")
            .then(res => {
                const cards: string[] = res.data.board;
                setCards(cards);
            });
    }

    const handleKeyDown = (event: any) => {
        if (event.keyCode === F_KEY) {
            setFlipImage(flipImage => !flipImage); // Toggle the flipImage flag
        }
    };

    useEffect(() => {
        getCards();
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return <div className='board'>
        {cards.map(card => <Card key={card} url={card} flipped={flipImage} />)}
    </div>;

}

export default Board;