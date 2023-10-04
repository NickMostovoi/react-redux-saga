import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDog} from "../../redux/actions";
import {loadersReducer, dogsReducer} from "../../redux/useSelectors";

function Dogs() {
    const dispatch = useDispatch();
    const dogs = useSelector(dogsReducer);
    const loader = useSelector(loadersReducer);

    const getDog = () => {
        dispatch(fetchDog());
    };

    return (
        <div className="dogs">
            <button className="dogs__btn" onClick={getDog}>Get a cool dog</button>
            {loader.showLoader && <span className="loader dogs__loader">Loading...</span>}
            {dogs.url && <img className="dogs__img" src={dogs.url} alt='img' />}
            {dogs.error && <div className="error dogs__error">{dogs.error}</div>}
        </div>
    );
}

export default Dogs;