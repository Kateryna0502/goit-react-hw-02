import { useEffect, useState } from "react";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";



function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }) => { return parseInt(localStorage.getItem("reviews") ?? 0) };

  useEffect(() => {
    localStorage.setItem("reviews", feedback);
  }, [feedback]);

};

  // updateFeedback(feedbackType)
  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    
  
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });

    const total = feedback.good + feedback.neutral + feedback.bad;
    const positive = Math.round((feedback.good / total) * 100);
    
    return (
      <>
        <div>
          <Description/>
               </div>
        <div>
          <Options/>
        </div>
        <div>
          {total > 0 && (
            <Feedback
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
            
              total={total}
            
              positive={positive}
              updateFeedback={updateFeedback}
              

            />
          )}
        </div>
        <div>
          <Notification/>
        </div>
      </>

    );
  };
  





















export default App