import ButtonFavorite from "../ButtonFavorite";

export default function ShowedNotes({notes, onFavorite}) {
    return (
        <section>
            {notes.map(({id, date, motto, textNotes, isFavorite}) => {
                return (
                    <article key={id}>
                        <p>{date}</p>
                        <h2>{motto}</h2>
                        <p>{textNotes}</p>
                        <ButtonFavorite isFavorite={isFavorite} onFavorite={onFavorite} id={id}/>
                    </article>
                );
            })}
        </section>
    );
}
