import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

interface CharacterProps {
    
}
 
const Character: FunctionComponent<CharacterProps> = () => {
    const [name, setName] = useState("")

    const getName = () => {
        axios.get("/api/name")
        .then(res => {
          const name: string = res.data.name;
          setName(name);
        })
    }

    useEffect(() => {
        getName()
    }, []) 

    return ( <div>
        <h1>Name: {name}</h1>
    </div> );
}
 
export default Character;