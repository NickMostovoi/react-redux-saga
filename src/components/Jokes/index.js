import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchJoke} from "../../redux/actions";
import {jokesReducer, loadersReducer} from "../../redux/useSelectors";

function Jokes() {
    const dispatch = useDispatch();
    const jokes = useSelector(jokesReducer);
    const loader = useSelector(loadersReducer);

    const [disabledButton, setDisabledButton] = useState(false);
    const [showPunchline, setShowPunchline] = useState(false);
    const [showJoke, setShowJoke] = useState(false);
    const [seconds, setSeconds] = useState(3);

    const getJoke = () => {
        setDisabledButton(true);
        setShowJoke(false);
        setShowPunchline(false);
        dispatch(fetchJoke());
    };

    useEffect(() => {
        if (jokes.joke?.length) {
            setSeconds(3);
            setShowJoke(true);

            setTimeout(() => {
                setShowPunchline(true);
                setDisabledButton(false);
            }, 3000)

            const interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [jokes]);

    return (
        <div className="jokes">
            <button className="jokes__btn" onClick={getJoke} disabled={disabledButton}>Get Joke</button>
            {loader.showLoader && <span className="loader jokes__loader">Loading...</span>}
            {showJoke && jokes.joke && <div className="jokes__joke">{jokes.joke}</div>}
            {showJoke && !showPunchline && <div className="jokes__delay">{seconds}...</div>}
            {showJoke && showPunchline && jokes.punchline && <div className="jokes__punchline">{jokes.punchline}</div>}
            {jokes.error && <div className="error jokes__error">{jokes.error}</div>}
        </div>
    );
}

export default Jokes;