import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFact} from "../../redux/actions";

function Numbers() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.numbersReducer);

    const getNumberFact = () => {
        dispatch(fetchFact());
    };

    return (
        <div className="numbers">
            <button className="numbers__btn" onClick={getNumberFact}>Get Number Fact</button>
            {data.fact && <div className="numbers__fact">{data.fact}</div>}
        </div>
    );
}

export default Numbers;