export default function Filters({onActiveNotes, notes, favoriteNotes}) {
    return (
        <section>
  
            <button 
                onClick={() => {
                    onActiveNotes("All Notes");
                }}
            >
                All Notes <span>{notes.length}</span>
            </button>
  
            <button
                onClick={() => {
                    onActiveNotes("Favorite Notes");
                }}
            >
                Favorite Notes <span>{favoriteNotes.length}</span>
            </button>
  
        </section>
    );
}
