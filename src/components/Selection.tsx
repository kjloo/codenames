import { useState, FunctionComponent } from 'react';
import axios from 'axios';

interface SelectionProps {

}

const Selection: FunctionComponent<SelectionProps> = () => {
    const [name, setName] = useState('')
    const createCharacter = (evt: any) => {
        evt.preventDefault();
        axios.post("/api/character/create", { "name": name })
            .then(res => {
                const name: string = res.data.name;
                setName(name);
            });
    }

    return <div>
        <form onSubmit={createCharacter}>
            <label>Character Name:
                <input type='text' placeholder='Character Name' onChange={(e) => setName(e.target.value)} value={name} required={true}></input>
            </label>
            <input type="submit" value="Create"></input>
        </form>
    </div>;

}

export default Selection;