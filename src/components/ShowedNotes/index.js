import ButtonFavorite from "../ButtonFavorite";

export default function ShowedNotes({notes, onFavorite}) {
    return (
        <section>
            <ul>
                {notes.map(({id, motto, textNotes, isFavorite}) => {
                    return (
                        <div key={id}>
                            <h2>{motto}</h2>
                            <p>{textNotes}</p>
                            <ButtonFavorite isFavorite={isFavorite} onFavorite={onFavorite} id={id}/>
                        </div>
                    );
                })}
            </ul>
        </section>
    );
}
