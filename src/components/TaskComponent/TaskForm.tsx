import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ColorPalette } from './ColorPalette';

export function TaskForm(){
    const [title, setTitle] = useState<string | null>(null);
    const [desc, setDesc] = useState<string | null>(null);
    const [label, setLabel] = useState<string | null>(null);
    const [labelColor, setLabelColor] = useState<string | null>(null);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLabel(event.target.value);
    };

    const handleColorSelect = (color: string)=> {
        setLabelColor(color);
    }

    const handleDescChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDesc(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: handle creating a new task
    };
    return (
        <div className="px-10">
            <form onSubmit={handleSubmit} className="flex flex-col">
            <input
                className="h-10 my-1 text-2xl font-bold focus:outline-none"
                type="text"
                value={title || ''} 
                onChange = {handleTitleChange}
                placeholder="New Task"
            />
            <div className="flex flex-row items-center">
                <p className="my-1 mr-4">Label: </p>
                <input
                    className="focus:outline-none"
                    type="text"
                    value={label || ''} 
                    onChange = {handleLabelChange}
                    placeholder="New Task"
                />
            </div>
            <div className= "ml-14 mt-2">
                <ColorPalette onColorSelect={handleColorSelect} />
            </div>
            <input
                className="h-10 my-2 font-xl font-light focus:outline-none"
                type="text"
                value={desc || ''} 
                onChange = {handleDescChange}
                placeholder="Enter description.."
            />
            <button type="submit" className="border inline-flex justify-center items-center h-10 mt-3 mx-24 bg-gray-200">Submit</button>
            </form>
        </div>
    )
}