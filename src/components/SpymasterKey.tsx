import { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Card, Role } from './Card';

interface SpymasterKeyProps { }

const SpymasterKey: FunctionComponent<SpymasterKeyProps> = () => {
    const [key, setKey] = useState<Role[]>([]);
    const [board, setBoard] = useState<string[]>([]);

    // Fetch the flat list of key data from the backend.
    const getKey = () => {
        axios.get("/api/spymaster")
            .then(res => {
                const key: Role[] = res.data.key;
                const board: Role[] = res.data.board;
                setKey(key);
                setBoard(board);
            });
    };

    const resetGame = () => {
        axios.post("/api/reset")
            .then(res => {
                setKey([]);
            });
        getKey();
    };

    useEffect(() => {
        getKey();
    }, []); // Run once on component mount.

    return (
        <>
            <FontAwesomeIcon id='reset-button' icon={faRefresh} onClick={resetGame} />
            <div className="board">
                {key.map((k, index) => <Card key={index} url={board[index]} role={k} />)}
            </div>
        </>
    );
};
export default SpymasterKey;
