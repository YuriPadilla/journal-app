export default function Form ({children, submitText}) {
    return (
        <form className="App-main-form">
            {children}

            <label htmlFor="inputName">Motto</label>
            <input 
                type="text" 
                name="inputName" 
                id="input-name"
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
            <button type="submit">{submitText}</button>
        </form>
    );
}