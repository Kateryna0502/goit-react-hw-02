import { useState } from "react";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";



function App() {
    const [feedback, setFeedback] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  });

  // updateFeedback(feedbackType)
  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    
  
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });

    const total = feedback.good + feedback.neutral + feedback.bad;
    return (
      <>
        <div>
          <Description
            <h2>Sip Happens Café</h2>
          <p>Please leave your feedback about our service by selecting one of the options below.</p>
        />
        </div>


        <div>
          <Options
            <button type="button" onClick={() => onFeedbackAdd("good")}> Good </button>
          <button type="button" onClick={() => onFeedbackAdd("neutral")}>
            Neutral
          </button>
          <button type="button" onClick={() => onFeedbackAdd("bad")}>
            Bad
          </button>
          <button type="button" onClick={() => onFeedbackAdd("reset")}>
            Reset
          </button>
            />
        </div>
        <div>
          <Feedback
      <ul>
            <li>Good: {feedback.good}</li>
            <li>Neuntral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            <li>
              <b>Total</b>: {total}
            </li>
            <li>Positive: {positive}</li>
          </ul>

      />
        </div>
      </>

    );
  };
  
}




















export default App
