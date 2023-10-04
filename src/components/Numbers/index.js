import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFact} from "../../redux/actions";
import {loadersReducer, numbersReducer} from "../../redux/useSelectors";

function Numbers() {
    const dispatch = useDispatch();
    const numbers = useSelector(numbersReducer);
    const loader = useSelector(loadersReducer);

    const getNumberFact = () => {
        dispatch(fetchFact());
    };

    return (
        <div className="numbers">
            <button className="numbers__btn" onClick={getNumberFact}>Get Number Fact</button>
            {loader.showLoader && <span className="loader numbers__loader">Loading...</span>}
            {numbers.fact && <div className="numbers__fact">{numbers.fact}</div>}
            {numbers.error && <div className="error numbers__error">{numbers.error}</div>}
        </div>
    );
}

export default Numbers;