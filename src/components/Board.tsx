import { useState, FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

interface BoardProps {

}

const Board: FunctionComponent<BoardProps> = () => {
    const [cards, setCards] = useState<string[]>([])
    const getCards = () => {
        axios.get("/api/board")
            .then(res => {
                const cards: string[] = res.data.board;
                setCards(cards);
            });
    }

    useEffect(() => {
        getCards();
    }, []);

    return <div className='board'>
        {cards.map(card => <Card url={card} />)}
    </div>;

}

export default Board;