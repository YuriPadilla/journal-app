import {ReactComponent as StarFilled} from "./star-filled.svg";
import {ReactComponent as Star} from "./star.svg";

export default function ButtonFavorite({isFavorite, onFavorite, id}) {
  
    return (
        <button onClick={() => {
            onFavorite(id);
        }}>
            {isFavorite === true ? <StarFilled/> : <Star/>}
        </button>
    );
}