import { useState, FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import { Card, Role } from './Card';

interface BoardProps { }

const Board: FunctionComponent<BoardProps> = () => {
    const F_KEY = 70;
    const [cards, setCards] = useState<string[]>([]);
    const [guesses, setGuesses] = useState<Role[]>([]);
    const [flipImage, setFlipImage] = useState(false);

    const getCards = () => {
        axios.get("/api/board")
            .then(res => {
                const cards: string[] = res.data.board;
                const guesses: Role[] = res.data.guess;
                setCards(cards);
                setGuesses(guesses);
            });
    }

    const postGuess = (index: number) => {
        const payload = { 'guess': index };
        axios.post("/api/guess", payload)
            .then(res => {
                const cards: string[] = res.data.board;
                const guesses: Role[] = res.data.guess;
                setCards(cards);
                setGuesses(guesses);
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

    return (
        <div className="board">
            {guesses.map((guess, index) => (
                <div key={index} onClick={() => postGuess(index)}>
                    <Card key={index} url={cards[index]} role={guess} flipped={flipImage} />
                </div>
            ))}
        </div>
    );
}

export default Board;
