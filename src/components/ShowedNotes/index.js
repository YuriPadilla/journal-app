export default function ShowedNotes({notes}) {
    return (
        <ul>
            {notes.map(({id, motto, textNotes}) => {
                return (
                    <div key={id}>
                        <h2>{motto}</h2>
                        <p>{textNotes}</p>
                    </div>
                );
            })}
        </ul>
    );
}