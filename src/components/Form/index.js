import { useState } from 'react';

export default function Form ({onSubmit}) {

    return (
        <section>
            <form onSubmit={onSubmit} className="App-main-form">
                <label htmlFor="inputName">Motto</label>
                <input 
                    type="text" 
                    name="inputMotto" 
                    id="input-motto"
                    placeholder="Motto" 
                    required 
                />

                <label>Notes</label>
                <textarea 
                    name="inputNotes" 
                    id="input-notes" 
                    cols="35"
                    rows="6"
                    placeholder="Your notes" 
                    required 
                ></textarea>
                
                <button type="submit">Create</button>
            </form>
        </section>
    );
}