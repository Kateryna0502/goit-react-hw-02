import css from "./Options.module.css" 
const Options = ({ good, neutral, bad, total, updateFeedback, resetFeedback }) => {

    return (
        <div >
            <button className={css.btn} type="button" onClick={() => updateFeedback("good")}>
                Good
            </button>
            <button className={css.btn} type="button" onClick={() => updateFeedback("neutral")}>
                Neutral
            </button>
            <button className={css.btn} type="button" onClick={() => updateFeedback("bad")}>
                Bad
            </button>
            {total > 0 && <button className={css.btn} type="button" onClick={resetFeedback}>
            Reset
        </button>}
        </div>
    );
};



export default Options;